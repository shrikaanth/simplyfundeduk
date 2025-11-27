import { ArrowRight, CheckCircle2, Clock, Shield, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fast, Flexible Business Loans for{' '}
                <span className="text-[#3d75ef]">UK SMEs</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Funding direct from the lender — decisions in hours, not weeks.
              </p>
              <p className="text-2xl font-semibold text-gray-800">
                Get £5,000 – £100,000 within 24 hours.
              </p>
              <p className="text-lg text-gray-600">
                Quick approval. Minimal paperwork. Built for small and growing businesses.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-[#3d75ef] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Quick & simple online application</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="text-[#3d75ef] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">All credit profiles considered</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-[#3d75ef] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Same-day funding available</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="text-[#3d75ef] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Dedicated account support</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-[#3d75ef] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2d5fd0] transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2">
                <span>Apply in 60 Seconds</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-white text-[#3d75ef] border-2 border-[#3d75ef] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#3d75ef] hover:text-white transition-all hover:shadow-xl">
                Check Eligibility
              </button>
            </div>

            <p className="text-sm text-gray-500 italic">
              No credit impact when checking eligibility
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3d75ef]/20 to-transparent rounded-3xl blur-3xl"></div>
            <img
              src="/Banner.png"
              alt="Business Funding"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
