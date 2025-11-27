import { FileText, Search, Phone, Banknote } from 'lucide-react';

export default function FAQProcess() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-600">Short & Simple</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
            <div className="bg-gradient-to-r from-[#3d75ef] to-[#5d8fff] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <FileText className="text-white" size={32} />
            </div>
            <div className="text-6xl font-bold text-[#3d75ef]/10 mb-4">01</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Quick Online Application
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Apply in less than a minute with basic business details.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
            <div className="bg-gradient-to-r from-[#3d75ef] to-[#5d8fff] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Search className="text-white" size={32} />
            </div>
            <div className="text-6xl font-bold text-[#3d75ef]/10 mb-4">02</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Fast Underwriting
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our team reviews your documents and confirms your funding offer.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
            <div className="bg-gradient-to-r from-[#3d75ef] to-[#5d8fff] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Phone className="text-white" size={32} />
            </div>
            <div className="text-6xl font-bold text-[#3d75ef]/10 mb-4">03</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Quick Call for Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We verify details and answer any questions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
            <div className="bg-gradient-to-r from-[#3d75ef] to-[#5d8fff] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Banknote className="text-white" size={32} />
            </div>
            <div className="text-6xl font-bold text-[#3d75ef]/10 mb-4">04</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Funding Within 24 Hours
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Money goes directly to your business bank account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
