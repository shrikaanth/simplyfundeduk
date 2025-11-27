import { CheckCircle2, Calendar, UserCheck, TrendingUp } from 'lucide-react';

export default function ProductEligibility() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Who Can Apply?
          </h2>
          <p className="text-xl text-gray-600">
            You are likely eligible if your business meets these minimum requirements:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-center">
            <div className="bg-gradient-to-r from-[#3d75ef] to-[#5d8fff] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              6 months
            </h3>
            <p className="text-gray-600 font-semibold">trading history</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-center">
            <div className="bg-gradient-to-r from-[#3d75ef] to-[#5d8fff] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserCheck className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              25%+
            </h3>
            <p className="text-gray-600 font-semibold">business ownership</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-center">
            <div className="bg-gradient-to-r from-[#3d75ef] to-[#5d8fff] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              £4,000+
            </h3>
            <p className="text-gray-600 font-semibold">monthly revenue</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl text-center">
          <CheckCircle2 className="text-[#3d75ef] mx-auto mb-4" size={48} />
          <p className="text-xl font-bold text-gray-900">
            No credit impact when you check eligibility.
          </p>
        </div>
      </div>
    </section>
  );
}
