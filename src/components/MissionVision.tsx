import { Target, Eye, Heart, TrendingUp, Shield, Users, Lightbulb } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-16 h-16 rounded-xl flex items-center justify-center">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>

            <p className="text-xl font-semibold text-gray-900 mb-6">
              Empowering UK SMEs With Flexible, Human-Centred Funding
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We envision a UK where every small and medium-sized business can access the capital they need
              to grow, innovate, and thrive without being held back by rigid credit requirements or delays.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="text-[#2b5fcc] flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Make business funding simple, accessible, and fair</p>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="text-[#2b5fcc] flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Prioritise a business's potential, not its past challenges</p>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="text-[#2b5fcc] flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Offer flexible loans that support real-world cashflow</p>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="text-[#2b5fcc] flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Build long-term partnerships that fuel sustainable growth</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <p className="text-gray-800 leading-relaxed italic">
                We don't see funding as a transaction. We see it as a partnership and we're committed
                to supporting SMEs at every stage.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-[#2b5fcc] to-[#4a7dde] w-16 h-16 rounded-xl flex items-center justify-center">
                <Eye className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>

            <p className="text-xl font-semibold text-gray-900 mb-6">
              Transforming Business Finance for UK SMEs
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We aim to reshape how UK SMEs experience business lending by offering funding solutions that are:
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-[#2b5fcc] to-[#4a7dde] p-6 rounded-xl text-center">
                <TrendingUp className="text-white mx-auto mb-2" size={32} />
                <p className="text-white font-bold text-lg">Fast</p>
              </div>
              <div className="bg-gradient-to-br from-[#2b5fcc] to-[#4a7dde] p-6 rounded-xl text-center">
                <Shield className="text-white mx-auto mb-2" size={32} />
                <p className="text-white font-bold text-lg">Flexible</p>
              </div>
              <div className="bg-gradient-to-br from-[#2b5fcc] to-[#4a7dde] p-6 rounded-xl text-center">
                <Lightbulb className="text-white mx-auto mb-2" size={32} />
                <p className="text-white font-bold text-lg">Transparent</p>
              </div>
              <div className="bg-gradient-to-br from-[#2b5fcc] to-[#4a7dde] p-6 rounded-xl text-center">
                <Users className="text-white mx-auto mb-2" size={32} />
                <p className="text-white font-bold text-lg">Designed for You</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              By continuously improving our processes and using smarter decision-making systems,
              we are building a future where SMEs don't just apply for funding they receive the
              support, guidance, and clarity they deserve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
