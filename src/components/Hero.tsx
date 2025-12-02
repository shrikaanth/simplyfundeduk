import { ArrowRight, CheckCircle2, Clock, Shield, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://ik.imagekit.io/6397z4kdz/Banner.png"
          alt="Business Funding Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              Fast, Flexible Business Loans for{' '}
              <span className="text-[#2b5fcc]">UK SMEs</span>
            </h1>
            <p className="text-2xl text-white leading-relaxed drop-shadow-md">
              Funding direct from the lender, decisions in hours, not weeks.
            </p>
            <p className="text-3xl font-semibold text-white drop-shadow-md">
              Get £5,000 - £100,000 within 24 hours.
            </p>
            <p className="text-xl text-white/90 drop-shadow-md">
              Quick approval. Minimal paperwork. Built for small and growing businesses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <CheckCircle2 className="text-[#2b5fcc] flex-shrink-0" size={24} />
              <p className="font-semibold text-gray-900 text-sm">Quick and simple online application</p>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <Shield className="text-[#2b5fcc] flex-shrink-0" size={24} />
              <p className="font-semibold text-gray-900 text-sm">All credit profiles considered</p>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <Clock className="text-[#2b5fcc] flex-shrink-0" size={24} />
              <p className="font-semibold text-gray-900 text-sm">Same-day funding available</p>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <Users className="text-[#2b5fcc] flex-shrink-0" size={24} />
              <p className="font-semibold text-gray-900 text-sm">Dedicated account support</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.simplyfunded.co.uk/application/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#2b5fcc] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#1e4ba8] transition-all hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Apply in 60 Seconds</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="https://www.simplyfunded.co.uk/application/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#2b5fcc] border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2b5fcc] hover:text-white hover:border-[#2b5fcc] transition-all hover:shadow-2xl hover:scale-105 text-center"
            >
              Check Eligibility
            </a>
          </div>

          <p className="text-sm text-white/90 italic drop-shadow-md">
            No credit impact when checking eligibility
          </p>
        </div>
      </div>
    </section>
  );
}
