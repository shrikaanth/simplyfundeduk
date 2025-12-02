import { Calendar, UserCheck, TrendingUp, ArrowRight } from 'lucide-react';

export default function FAQEligibility() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Eligibility at a Glance
          </h2>
          <p className="text-xl text-gray-600">
            Your business qualifies if you have:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all hover:scale-105">
            <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              6 Months
            </h3>
            <p className="text-gray-600 font-semibold">Minimum Trading</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all hover:scale-105">
            <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserCheck className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              25%
            </h3>
            <p className="text-gray-600 font-semibold">Minimum Ownership</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all hover:scale-105">
            <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              £4,000+
            </h3>
            <p className="text-gray-600 font-semibold">Monthly Revenue</p>
          </div>
        </div>

        <div className="text-center">
          <button className="group bg-[#2b5fcc] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#1e4ba8] transition-all hover:shadow-xl hover:scale-105 inline-flex items-center space-x-3">
            <span>Check Eligibility (No Credit Impact)</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
