import Header from '../components/Header';
import Footer from '../components/Footer';
import ApplicationForm from '../components/ApplicationForm';

export default function Apply() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2b5fcc] to-[#4a7dde]">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Apply for Business Funding
            </h1>
            <p className="text-xl leading-relaxed opacity-95 mb-4">
              Get £5,000 to £100,000 within 24 hours
            </p>
            <p className="text-lg opacity-90">
              Quick application, Same-day approval, No hidden fees
            </p>
          </div>
        </section>

        <ApplicationForm />

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Why Choose SimplyFunded?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Quick Approval</h3>
                    <p className="text-gray-600 text-sm">Get a decision within hours, not days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Flexible Terms</h3>
                    <p className="text-gray-600 text-sm">Choose repayment terms that suit your cashflow</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">All Credit Profiles</h3>
                    <p className="text-gray-600 text-sm">We consider applications from all credit backgrounds</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Dedicated Support</h3>
                    <p className="text-gray-600 text-sm">UK-based team ready to help at every step</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
