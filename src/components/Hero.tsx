import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://ik.imagekit.io/6397z4kdz/Banner.png"
          alt="Business Funding Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-left">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Fast, Flexible Business Loans for{' '}
                <span className="text-[#2b5fcc]">UK SMEs</span>
              </h1>
              <p className="text-xl text-white leading-relaxed drop-shadow-md">
                Funding direct from the lender, decisions in hours, not weeks.
              </p>
              <p className="text-2xl font-semibold text-white drop-shadow-md">
                Get £5,000 - £100,000 within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
          </div>

          <div className="hidden lg:block">
            {/* This space allows the banner image to be visible on the right */}
          </div>
        </div>
      </div>
    </section>
  );
}
