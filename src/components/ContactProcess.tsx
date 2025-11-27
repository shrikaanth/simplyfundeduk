import { Clock, Search, User, Banknote } from 'lucide-react';

export default function ContactProcess() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="bg-gradient-to-r from-[#3d75ef] to-[#5d8fff] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Clock className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Quick and Easy Application
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Applying for funding with SimplyFunded is quick and hassle-free. Our fast business
              funding process ensures that UK SMEs get the support they need without delays. With
              our simple online application, you can apply in less than a minute—just enter your
              company name, contact details, and funding requirements.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="bg-gradient-to-r from-[#3d75ef] to-[#5d8fff] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Search className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Efficient Underwriting Funding Potential
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Once we receive your funding application documents, our underwriting team will quickly
              review them and determine the business loan amount we can provide to support your growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="bg-gradient-to-r from-[#3d75ef] to-[#5d8fff] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <User className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              A Quick Call – Funding Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Applying for business funding with SimplyFunded is quick, simple, and hassle-free.
              Our fast funding application takes less than a minute—just provide your company name,
              contact details, and funding needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="bg-gradient-to-r from-[#3d75ef] to-[#5d8fff] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Banknote className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Funding Direct to your Business Bank account
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get business funding directly into your bank account within 24 hours. Whether you're
              expanding, managing cash flow, or seizing a new opportunity, SimplyFunded provides
              quick and hassle-free financing with minimal paperwork.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
