import { FileText, Search, Banknote } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Fast Funding in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the capital your business needs in as little as 24 hours
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <div className="absolute -top-6 left-8">
                <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                  <FileText className="text-white" size={32} />
                </div>
              </div>
              <div className="pt-8">
                <div className="text-6xl font-bold text-gray-100 mb-4">01</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Apply Online</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fill out a 60-second application with basic business details.
                </p>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#2b5fcc] to-transparent"></div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <div className="absolute -top-6 left-8">
                <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                  <Search className="text-white" size={32} />
                </div>
              </div>
              <div className="pt-8">
                <div className="text-6xl font-bold text-gray-100 mb-4">02</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Assessment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our underwriting team reviews your documents and confirms your funding offer.
                </p>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#2b5fcc] to-transparent"></div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105">
              <div className="absolute -top-6 left-8">
                <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                  <Banknote className="text-white" size={32} />
                </div>
              </div>
              <div className="pt-8">
                <div className="text-6xl font-bold text-gray-100 mb-4">03</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Funded Within 24 Hours</h3>
                <p className="text-gray-600 leading-relaxed">
                  Money is sent directly to your business bank account — fast, secure, hassle-free.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-[#2b5fcc] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#1e4ba8] transition-all hover:shadow-xl hover:scale-105">
            Start Your Application
          </button>
        </div>
      </div>
    </section>
  );
}
