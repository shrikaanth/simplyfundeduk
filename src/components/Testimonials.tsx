import { Star, Shield } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Support. Fast Decisions. Reliable Funding.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-blue-400 fill-blue-400" size={24} />
              ))}
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">4.8/5</p>
            <p className="text-gray-600 font-semibold">Trustpilot Rating</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-blue-400 fill-blue-400" size={24} />
              ))}
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">4.9/5</p>
            <p className="text-gray-600 font-semibold">Google Rating</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center justify-center">
            <Shield className="text-[#2b5fcc] mb-4" size={48} />
            <p className="text-xl font-bold text-gray-900">
              Applying won't affect your credit score!
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-12 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl text-gray-700 italic leading-relaxed mb-6">
              "SimplyFunded made the entire process incredibly straightforward. We received our funding within 24 hours, which allowed us to seize a crucial business opportunity. Their team was supportive every step of the way."
            </p>
            <p className="text-lg font-semibold text-gray-900">Sarah J., Manchester SME Owner</p>
          </div>
        </div>
      </div>
    </section>
  );
}
