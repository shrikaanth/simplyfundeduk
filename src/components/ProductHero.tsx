import { ArrowRight } from 'lucide-react';

export default function ProductHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#2b5fcc]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Fast and Flexible Business Loans for{' '}
            <span className="text-blue-300">UK SMEs</span>
          </h1>

          <p className="text-xl text-white leading-relaxed">
            Get Funded in 24 Hours
          </p>

          <p className="text-lg text-white/90 leading-relaxed">
            Access fast, simple, and unsecured business loans directly from the lender.
            We help UK SMEs secure £5,000 to £100,000 quickly with approvals in hours and funding within 24 hours.
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <p className="text-gray-700 mb-4 font-semibold">Whether you need:</p>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#2b5fcc] rounded-full"></div>
                <p className="text-gray-700">Working capital</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#2b5fcc] rounded-full"></div>
                <p className="text-gray-700">Cashflow support</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#2b5fcc] rounded-full"></div>
                <p className="text-gray-700">Expansion funding</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#2b5fcc] rounded-full"></div>
                <p className="text-gray-700">Emergency finance</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-white leading-relaxed">
            SimplyFunded delivers fast, flexible, and hassle-free business funding designed around your needs.
          </p>

          <div className="pt-4">
            <a
              href="https://www.simplyfunded.co.uk/application/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#2b5fcc] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#1e4ba8] transition-all hover:shadow-xl hover:scale-105 inline-flex items-center space-x-3"
            >
              <span>Apply Now (Takes 60 Seconds)</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
