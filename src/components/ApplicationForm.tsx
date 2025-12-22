import { useState } from 'react';
import { Building2, User, Mail, Phone, Banknote, Calendar, FileText } from 'lucide-react';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    tradingName: '',
    companyNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    ownership: '',
    monthlyRevenue: '',
    tradingMonths: '',
    fundingAmount: '',
    fundingPurpose: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Business Funding Application
            </h2>
            <p className="text-gray-600">
              Complete the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Building2 className="mr-2 text-[#2b5fcc]" size={24} />
                Company Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5fcc] focus:border-transparent outline-none transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="tradingName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Trading Name
                  </label>
                  <input
                    type="text"
                    id="tradingName"
                    name="tradingName"
                    value={formData.tradingName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5fcc] focus:border-transparent outline-none transition-all"
                    placeholder="If different from company name"
                  />
                </div>

                <div>
                  <label htmlFor="companyNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Registration Number
                  </label>
                  <input
                    type="text"
                    id="companyNumber"
                    name="companyNumber"
                    value={formData.companyNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5fcc] focus:border-transparent outline-none transition-all"
                    placeholder="e.g., 12345678"
                  />
                </div>

                <div>
                  <label htmlFor="tradingMonths" className="block text-sm font-semibold text-gray-700 mb-2">
                    Months Trading *
                  </label>
                  <select
                    id="tradingMonths"
                    name="tradingMonths"
                    value={formData.tradingMonths}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5fcc] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select months trading</option>
                    <option value="6-12">6-12 months</option>
                    <option value="12-24">12-24 months</option>
                    <option value="24-36">24-36 months</option>
                    <option value="36+">36+ months</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="monthlyRevenue" className="block text-sm font-semibold text-gray-700 mb-2">
                    Average Monthly Revenue *
                  </label>
                  <select
                    id="monthlyRevenue"
                    name="monthlyRevenue"
                    value={formData.monthlyRevenue}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5fcc] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select monthly revenue</option>
                    <option value="4000-10000">£4,000 - £10,000</option>
                    <option value="10000-25000">£10,000 - £25,000</option>
                    <option value="25000-50000">£25,000 - £50,000</option>
                    <option value="50000+">£50,000+</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <User className="mr-2 text-[#2b5fcc]" size={24} />
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5fcc] focus:border-transparent outline-none transition-all"
                    placeholder="Your first name"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5fcc] focus:border-transparent outline-none transition-all"
                    placeholder="Your last name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <Mail className="mr-1" size={16} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5fcc] focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <Phone className="mr-1" size={16} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5fcc] focus:border-transparent outline-none transition-all"
                    placeholder="07XXX XXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                    Position in Company *
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5fcc] focus:border-transparent outline-none transition-all"
                    placeholder="e.g., Director, Owner"
                  />
                </div>

                <div>
                  <label htmlFor="ownership" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ownership Percentage *
                  </label>
                  <select
                    id="ownership"
                    name="ownership"
                    value={formData.ownership}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5fcc] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select ownership %</option>
                    <option value="25-50">25% - 50%</option>
                    <option value="50-75">50% - 75%</option>
                    <option value="75-100">75% - 100%</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Banknote className="mr-2 text-[#2b5fcc]" size={24} />
                Funding Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fundingAmount" className="block text-sm font-semibold text-gray-700 mb-2">
                    Funding Amount Required *
                  </label>
                  <select
                    id="fundingAmount"
                    name="fundingAmount"
                    value={formData.fundingAmount}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5fcc] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select amount</option>
                    <option value="5000-10000">£5,000 - £10,000</option>
                    <option value="10000-25000">£10,000 - £25,000</option>
                    <option value="25000-50000">£25,000 - £50,000</option>
                    <option value="50000-75000">£50,000 - £75,000</option>
                    <option value="75000-100000">£75,000 - £100,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="fundingPurpose" className="block text-sm font-semibold text-gray-700 mb-2">
                    Purpose of Funding *
                  </label>
                  <select
                    id="fundingPurpose"
                    name="fundingPurpose"
                    value={formData.fundingPurpose}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5fcc] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select purpose</option>
                    <option value="working-capital">Working Capital</option>
                    <option value="hmrc">HMRC Payments</option>
                    <option value="rent">Rent & Business Rates</option>
                    <option value="wages">Wages & Salaries</option>
                    <option value="stock">Stock Purchases</option>
                    <option value="refurbishment">Refurbishment & Upgrades</option>
                    <option value="contracts">New Contracts</option>
                    <option value="expansion">Business Expansion</option>
                    <option value="machinery">Plant & Machinery</option>
                    <option value="marketing">Marketing & Advertising</option>
                    <option value="unexpected">Unexpected Bills</option>
                    <option value="cashflow">Cashflow Buffer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <FileText className="mr-1" size={16} />
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b5fcc] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us more about your business or funding requirements..."
                />
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  i
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">What Happens Next?</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• We'll review your application within 2 hours</li>
                    <li>• A funding specialist will call you to discuss your needs</li>
                    <li>• You'll receive a formal offer within 24 hours</li>
                    <li>• Funds can be in your account the same day</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-[#2b5fcc] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#1e4ba8] transition-all hover:shadow-xl hover:scale-105"
              >
                Submit Application
              </button>
            </div>

            <p className="text-sm text-gray-500 text-center">
              By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
              Checking eligibility will not affect your credit score.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
