import { FileText, Search, Phone, Banknote } from 'lucide-react';

export default function AboutProcess() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-600">
            Simple, Fast, and Built for SMEs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
            <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <FileText className="text-white" size={32} />
            </div>
            <div className="text-6xl font-bold text-gray-100 text-center mb-4">01</div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
              Quick Application
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Apply in under a minute with basic company information fast, straightforward, and online.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
            <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Search className="text-white" size={32} />
            </div>
            <div className="text-6xl font-bold text-gray-100 text-center mb-4">02</div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
              Fast Assessment
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Once your documents are received, our underwriting team quickly reviews your profile.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
            <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Phone className="text-white" size={32} />
            </div>
            <div className="text-6xl font-bold text-gray-100 text-center mb-4">03</div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
              Quick Verification Call
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              A short call helps us understand your goals and finalise your funding plan.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
            <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Banknote className="text-white" size={32} />
            </div>
            <div className="text-6xl font-bold text-gray-100 text-center mb-4">04</div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
              Funding Delivered
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Receive funds within 24 hours ideal for expansions, cashflow support, or new opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
