import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Eligibility() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#2b5fcc] to-[#4a7dde] rounded-3xl p-12 text-white shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Are You Eligible?
            </h2>
            <p className="text-xl opacity-90">(You likely are!)</p>
          </div>

          <div className="space-y-6 mb-12">
            <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <CheckCircle2 className="flex-shrink-0 mt-1" size={28} />
              <div>
                <p className="text-xl font-semibold">Minimum 6 months trading</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <CheckCircle2 className="flex-shrink-0 mt-1" size={28} />
              <div>
                <p className="text-xl font-semibold">25% ownership of the business</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <CheckCircle2 className="flex-shrink-0 mt-1" size={28} />
              <div>
                <p className="text-xl font-semibold">Minimum £4,000 monthly revenue</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/apply"
              className="group bg-white text-[#2b5fcc] px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all hover:shadow-xl hover:scale-105 inline-flex items-center space-x-3"
            >
              <span>Check Your Eligibility</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <p className="mt-4 text-sm opacity-90 italic">
              Won't affect your credit score
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
