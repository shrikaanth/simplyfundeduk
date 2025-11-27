import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactDetails() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Details
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
            <div className="bg-[#3d75ef] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Phone className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Phone Number
            </h3>
            <a
              href="tel:01642057445"
              className="text-[#3d75ef] font-semibold text-lg hover:underline"
            >
              01642 057 445
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
            <div className="bg-[#3d75ef] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Email
            </h3>
            <a
              href="mailto:enquiries@simplyfunded.co.uk"
              className="text-[#3d75ef] font-semibold hover:underline break-all"
            >
              enquiries@simplyfunded.co.uk
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
            <div className="bg-[#3d75ef] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Office Address
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Evolve Business Centre<br />
              Cygnet Way<br />
              Houghton Le Spring<br />
              DH4 5QY
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center">
            <div className="bg-[#3d75ef] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Clock className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Business Hours
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Monday – Friday<br />
              9:00 AM – 5:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
