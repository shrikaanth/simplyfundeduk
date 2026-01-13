import { CheckCircle2, Clock, DollarSign, FileText, TrendingUp, Users } from 'lucide-react';

export default function WhoWeAre() {
  const features = [
    { icon: DollarSign, text: 'Clear and upfront pricing' },
    { icon: CheckCircle2, text: 'No hidden fees' },
    { icon: TrendingUp, text: 'Flexible terms' },
    { icon: Clock, text: 'Fast assessment' },
    { icon: FileText, text: 'Funding in as little as 24 hours' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Who We Are
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              SimplyFunded is a direct UK lender focused on helping small and medium-sized businesses
              access finance quickly and confidently.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We understand the real challenges SMEs face irregular cash flow, rapid growth needs,
              and limited traditional banking options. Our approach is different: fewer hurdles,
              faster approvals, and human-centered decisions.
            </p>

            <div className="pt-4">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                We provide fixed-term business loans with:
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="bg-[#2b5fcc] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-white" size={24} />
                </div>
                <p className="text-lg font-semibold text-gray-900">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
