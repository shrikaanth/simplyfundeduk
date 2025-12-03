import { FileText, Search, Phone, Banknote } from 'lucide-react';

export default function ProductProcess() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Simple 4-Step Funding Process
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <div className="absolute -top-6 left-8">
                <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                  <FileText className="text-white" size={32} />
                </div>
              </div>
              <div className="pt-8">
                <div className="text-7xl font-bold text-[#2b5fcc]/10 mb-4">01</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Application
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Apply online in under a minute with basic business information. No long forms or complicated steps.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <div className="absolute -top-6 left-8">
                <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                  <Search className="text-white" size={32} />
                </div>
              </div>
              <div className="pt-8">
                <div className="text-7xl font-bold text-[#2b5fcc]/10 mb-4">02</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Fast Underwriting & Assessment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Once your documents are submitted, our team quickly reviews them and confirms your approval.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <div className="absolute -top-6 left-8">
                <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                  <Phone className="text-white" size={32} />
                </div>
              </div>
              <div className="pt-8">
                <div className="text-7xl font-bold text-[#2b5fcc]/10 mb-4">03</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Call for Final Details
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A short verification call helps us tailor the funding to your business needs.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <div className="absolute -top-6 left-8">
                <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                  <Banknote className="text-white" size={32} />
                </div>
              </div>
              <div className="pt-8">
                <div className="text-7xl font-bold text-[#2b5fcc]/10 mb-4">04</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Funding Paid to Your Account
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive funds within 24 hours simple, fast, and secure.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-[#2b5fcc] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#1e4ba8] transition-all hover:shadow-xl hover:scale-105">
            Start Application Now
          </button>
        </div>
      </div>
    </section>
  );
}
