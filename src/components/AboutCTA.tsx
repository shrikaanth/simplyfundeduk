import { ArrowRight } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2b5fcc] to-[#4a7dde]">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Fuel Your Business Growth With SimplyFunded
        </h2>
        <p className="text-xl leading-relaxed mb-10 opacity-95">
          Whether you're looking to expand, stabilise cashflow, or invest in new opportunities,
          we provide the funding your business deserves—fast, fair, and flexible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-white text-[#2b5fcc] px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-3">
            <span>Check Your Eligibility</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-[#2b5fcc] transition-all hover:shadow-2xl hover:scale-105">
            Start Your Application
          </button>
        </div>

        <p className="mt-6 text-sm opacity-90 italic">
          Get £5,000 – £100,000 within 24 hours
        </p>
      </div>
    </section>
  );
}
