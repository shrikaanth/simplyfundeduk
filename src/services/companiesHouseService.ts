import type {
    CompanyProfile,
    OfficersResponse,
    CompanySearchResult,
    ApiError,
} from '../types/companiesHouse.types';

const COMPANIES_HOUSE_API_BASE = 'https://api.company-information.service.gov.uk';

// API Key should be stored in environment variables
// For development, you can set it in .env file as VITE_COMPANIES_HOUSE_API_KEY
// NOTE: This is the REST API key, NOT the OAuth Client ID/Secret
const API_KEY = import.meta.env.VITE_COMPANIES_HOUSE_API_KEY || '';

/**
 * Formats company number to standard 8-character format
 * @param companyNumber - Raw company number input
 * @returns Formatted company number
 */
export function formatCompanyNumber(companyNumber: string): string {
    // Remove spaces and convert to uppercase
    const cleaned = companyNumber.replace(/\s/g, '').toUpperCase();

    // Pad with leading zeros if numeric and less than 8 characters
    if (/^\d+$/.test(cleaned) && cleaned.length < 8) {
        return cleaned.padStart(8, '0');
    }

    return cleaned;
}

/**
 * Validates UK company number format
 * @param companyNumber - Company number to validate
 * @returns True if valid format
 */
export function validateCompanyNumber(companyNumber: string): boolean {
    const formatted = formatCompanyNumber(companyNumber);

    // UK company numbers are typically 8 characters
    // Can be all numbers, or start with 2 letters (SC, NI, etc.)
    const ukCompanyNumberRegex = /^([A-Z]{2}\d{6}|\d{8})$/;

    return ukCompanyNumberRegex.test(formatted);
}

/**
 * Creates Basic Auth header for Companies House API
 * @returns Authorization header value
 */
function getAuthHeader(): string {
    if (!API_KEY) {
        console.warn('Companies House API key not configured');
        return '';
    }

    // Companies House uses API key as username with empty password for Basic Auth
    const credentials = btoa(`${API_KEY}:`);
    return `Basic ${credentials}`;
}

/**
 * Fetches company profile from Companies House API
 * @param companyNumber - Company registration number
 * @returns Company profile data
 */
export async function getCompanyProfile(
    companyNumber: string
): Promise<CompanyProfile> {
    const formatted = formatCompanyNumber(companyNumber);

    if (!validateCompanyNumber(formatted)) {
        throw new Error('Invalid company number format');
    }

    const url = `${COMPANIES_HOUSE_API_BASE}/company/${formatted}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': getAuthHeader(),
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Company not found. Please check the company number.');
            }
            if (response.status === 401) {
                throw new Error('API authentication failed. Please check your API key.');
            }
            throw new Error(`Failed to fetch company data: ${response.statusText}`);
        }

        const data: CompanyProfile = await response.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Failed to fetch company information');
    }
}

/**
 * Fetches company officers (directors) from Companies House API
 * @param companyNumber - Company registration number
 * @returns List of company officers
 */
export async function getCompanyOfficers(
    companyNumber: string
): Promise<OfficersResponse> {
    const formatted = formatCompanyNumber(companyNumber);

    if (!validateCompanyNumber(formatted)) {
        throw new Error('Invalid company number format');
    }

    const url = `${COMPANIES_HOUSE_API_BASE}/company/${formatted}/officers`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': getAuthHeader(),
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Company officers not found.');
            }
            if (response.status === 401) {
                throw new Error('API authentication failed. Please check your API key.');
            }
            throw new Error(`Failed to fetch officers data: ${response.statusText}`);
        }

        const data: OfficersResponse = await response.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Failed to fetch company officers');
    }
}

/**
 * Fetches complete company information including profile and officers
 * @param companyNumber - Company registration number
 * @returns Combined company and officers data
 */
export async function searchCompany(
    companyNumber: string
): Promise<CompanySearchResult> {
    try {
        // Fetch both company profile and officers in parallel
        const [company, officersData] = await Promise.all([
            getCompanyProfile(companyNumber),
            getCompanyOfficers(companyNumber),
        ]);

        return {
            company,
            officers: officersData.items || [],
        };
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Failed to search company');
    }
}

/**
 * Formats company address into a single string
 * @param address - Company address object
 * @returns Formatted address string
 */
export function formatAddress(address: any): string {
    if (!address) return '';

    const parts = [
        address.premises,
        address.address_line_1,
        address.address_line_2,
        address.locality,
        address.region,
        address.postal_code,
        address.country,
    ].filter(Boolean);

    return parts.join(', ');
}

/**
 * Parses officer name into first and last name
 * @param fullName - Full name from API (usually "SURNAME, Forename")
 * @returns Object with firstName and lastName
 */
export function parseOfficerName(fullName: string): { firstName: string; lastName: string } {
    // Companies House format is usually "SURNAME, Forename Middle"
    const parts = fullName.split(',').map(p => p.trim());

    if (parts.length >= 2) {
        const lastName = parts[0];
        const firstName = parts[1].split(' ')[0]; // Take first word as first name

        return {
            firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase(),
            lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase(),
        };
    }

    // Fallback: split by space
    const nameParts = fullName.split(' ');
    return {
        firstName: nameParts[0] || '',
        lastName: nameParts.slice(1).join(' ') || '',
    };
}
