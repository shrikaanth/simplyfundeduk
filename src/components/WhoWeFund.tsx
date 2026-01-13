import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhoWeFund() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Who We Can Fund
          </h2>
          <p className="text-xl text-gray-600">
            You qualify if you have:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all hover:scale-105">
            <CheckCircle2 className="text-[#2b5fcc] mx-auto mb-4" size={48} />
            <p className="text-2xl font-bold text-gray-900 mb-2">6 Months</p>
            <p className="text-gray-600 font-semibold">Minimum Trading</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all hover:scale-105">
            <CheckCircle2 className="text-[#2b5fcc] mx-auto mb-4" size={48} />
            <p className="text-2xl font-bold text-gray-900 mb-2">25%</p>
            <p className="text-gray-600 font-semibold">Minimum Ownership</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all hover:scale-105">
            <CheckCircle2 className="text-[#2b5fcc] mx-auto mb-4" size={48} />
            <p className="text-2xl font-bold text-gray-900 mb-2">£4,000.00+</p>
            <p className="text-gray-600 font-semibold">Monthly Revenue</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl text-center">
          <p className="text-lg text-gray-700 mb-2">
            If you meet the above, you're likely eligible for fast funding
          </p>
          <p className="text-xl font-bold text-[#2b5fcc]">
            without affecting your credit score.
          </p>
        </div>
      </div>
    </section>
  );
}
