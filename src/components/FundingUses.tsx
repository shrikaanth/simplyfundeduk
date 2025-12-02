import {
  Briefcase,
  FileText,
  Home,
  Users,
  Package,
  Paintbrush,
  FileCheck,
  TrendingUp,
  Cog,
  Megaphone,
  AlertCircle,
  Wallet
} from 'lucide-react';

export default function FundingUses() {
  const fundingOptions = [
    {
      icon: Briefcase,
      title: 'Working Capital',
      description: 'Keep operations running smoothly and cover day-to-day expenses.'
    },
    {
      icon: FileText,
      title: 'HMRC Payments',
      description: 'Resolve tax liabilities without cashflow strain.'
    },
    {
      icon: Home,
      title: 'Rent & Business Rates',
      description: 'Stay on track with property and operational costs.'
    },
    {
      icon: Users,
      title: 'Wages & Salaries',
      description: 'Ensure timely payroll even during tight periods.'
    },
    {
      icon: Package,
      title: 'Stock Purchases',
      description: 'Boost inventory for busy seasons or new orders.'
    },
    {
      icon: Paintbrush,
      title: 'Refurbishment & Upgrades',
      description: 'Improve your premises or equipment cost-effectively.'
    },
    {
      icon: FileCheck,
      title: 'New Contracts',
      description: 'Secure funding for supplies, staffing, or upfront project costs.'
    },
    {
      icon: TrendingUp,
      title: 'Business Expansion',
      description: 'Grow confidently with capital for scaling operations.'
    },
    {
      icon: Cog,
      title: 'Plant & Machinery',
      description: 'Finance equipment purchases without large upfront costs.'
    },
    {
      icon: Megaphone,
      title: 'Marketing & Advertising',
      description: 'Invest in campaigns to attract more customers.'
    },
    {
      icon: AlertCircle,
      title: 'Unexpected Bills',
      description: 'Cover emergencies or sudden expenses.'
    },
    {
      icon: Wallet,
      title: 'Cashflow Buffer',
      description: 'Strengthen your financial stability with extra working capital.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Funding We Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our loans can be used across a wide range of business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fundingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <option.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#2b5fcc] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#1e4ba8] transition-all hover:shadow-xl hover:scale-105">
            Check Eligibility (Won't Affect Credit Score)
          </button>
        </div>
      </div>
    </section>
  );
}
