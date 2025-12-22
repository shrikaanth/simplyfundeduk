import { Zap, Clock, Users, Building, CalendarCheck, Shield } from 'lucide-react';

export default function ProductBenefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Fast approvals',
      description: 'Decisions in hours, not days'
    },
    {
      icon: Clock,
      title: 'Same-day funding',
      description: 'Money in your account within 24 hours'
    },
    {
      icon: Users,
      title: 'All credit profiles considered',
      description: 'We look at your business potential'
    },
    {
      icon: Building,
      title: 'Tailored funding solutions',
      description: 'Finance structured around your business needs'
    },
    {
      icon: CalendarCheck,
      title: 'Flexible repayment terms',
      description: 'Choose terms that suit your cashflow'
    },
    {
      icon: Shield,
      title: 'No hidden fees',
      description: 'Transparent pricing, no surprises'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hassle-Free Funding for UK Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialise in unsecured business loans built for SMEs.
            No long waits. No complex paperwork. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="bg-[#2b5fcc] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
