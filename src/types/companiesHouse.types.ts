// Companies House API Type Definitions

export interface CompanyAddress {
    address_line_1?: string;
    address_line_2?: string;
    locality?: string;
    region?: string;
    postal_code?: string;
    country?: string;
    premises?: string;
    care_of?: string;
    po_box?: string;
}

export interface CompanyProfile {
    company_name: string;
    company_number: string;
    company_status: string;
    company_status_detail?: string;
    date_of_creation: string;
    jurisdiction: string;
    registered_office_address: CompanyAddress;
    type: string;
    sic_codes?: string[];
    has_been_liquidated?: boolean;
    has_charges?: boolean;
    has_insolvency_history?: boolean;
    accounts?: {
        next_accounts?: {
            due_on?: string;
            overdue?: boolean;
        };
        last_accounts?: {
            made_up_to?: string;
            type?: string;
        };
    };
    confirmation_statement?: {
        next_due?: string;
        overdue?: boolean;
    };
}

export interface Officer {
    name: string;
    officer_role: string;
    appointed_on: string;
    resigned_on?: string;
    nationality?: string;
    country_of_residence?: string;
    occupation?: string;
    date_of_birth?: {
        month: number;
        year: number;
    };
    address?: CompanyAddress;
    links?: {
        officer?: {
            appointments?: string;
        };
    };
}

export interface OfficersResponse {
    active_count: number;
    resigned_count: number;
    total_results: number;
    items: Officer[];
    links?: {
        self?: string;
    };
}

export interface CompanySearchResult {
    company: CompanyProfile;
    officers: Officer[];
}

export interface ApiError {
    error: string;
    message: string;
    statusCode: number;
}
