import { Briefcase, TrendingUp, Rocket } from 'lucide-react';

export default function WhySection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted Business Loan Solutions for SMEs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Accessing business finance shouldn't be slow or complicated. Whether you're managing cash flow,
            expanding, or starting fresh—SimplyFunded helps UK SMEs get the funding they need, fast.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:scale-105">
            <div className="bg-[#2b5fcc] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Rocket className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Start-ups & New Businesses</h3>
            <p className="text-gray-600">
              Get the capital you need to launch and grow your new venture with confidence.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:scale-105">
            <div className="bg-[#2b5fcc] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Briefcase className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Small & Medium Enterprises</h3>
            <p className="text-gray-600">
              Flexible funding solutions designed specifically for established SMEs.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:scale-105">
            <div className="bg-[#2b5fcc] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Growing Businesses</h3>
            <p className="text-gray-600">
              Quick capital access to fuel your expansion and seize new opportunities.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] p-8 rounded-2xl text-center text-white">
          <p className="text-2xl font-bold mb-2">Typical Borrowing Range</p>
          <p className="text-4xl font-bold mb-2">£5,000 – £100,000</p>
          <p className="text-lg opacity-90">For 3–12 months</p>
        </div>
      </div>
    </section>
  );
}
