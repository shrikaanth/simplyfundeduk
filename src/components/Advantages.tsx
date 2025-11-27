import { DollarSign, Calendar, Headphones, Settings, Key } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    {
      icon: DollarSign,
      title: 'No Hidden Fees — 100% Transparent Funding',
      description: 'Clear costs, fixed pricing, and no unexpected charges. What you see is what you pay.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calendar,
      title: 'Customisable Terms Designed for Your Business',
      description: 'Choose loan durations that match your cashflow. Short-term, flexible, and designed for SME realities.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Headphones,
      title: 'Dedicated SME Support',
      description: 'A UK-based team that understands small business challenges. Personal support throughout the funding journey.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Settings,
      title: 'Personalised Funding Solutions',
      description: 'Every business is different. We assess your needs and craft a funding plan aligned with your goals.',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Key,
      title: 'Low-Barrier Approval Process',
      description: 'Unsecured business loans designed for non-homeowners, SMEs with limited collateral, and businesses with mixed credit backgrounds.',
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Core Advantages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five powerful reasons why UK SMEs choose SimplyFunded
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 group"
            >
              <div className={`bg-gradient-to-r ${advantage.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <advantage.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
