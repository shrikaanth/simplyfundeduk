import { CheckCircle2 } from 'lucide-react';

export default function ContactEligibility() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            If you have...
          </h2>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-2xl shadow-xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-white" size={28} />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-lg">6 Months</p>
                <p className="text-gray-700">Minimum Trading</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-white" size={28} />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-lg">25%</p>
                <p className="text-gray-700">Minimum Ownership</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-white" size={28} />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-lg">£4,000.00</p>
                <p className="text-gray-700">per month minimum revenue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
