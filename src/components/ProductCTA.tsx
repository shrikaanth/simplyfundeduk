import { ArrowRight, Phone } from 'lucide-react';

export default function ProductCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2b5fcc] to-[#4a7dde]">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Get Fast, Flexible Funding Today
        </h2>
        <p className="text-xl leading-relaxed mb-10 opacity-95">
          Whether you're expanding, handling cashflow, or managing unexpected costs,
          SimplyFunded provides the funding your business needs on your terms and without delays.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://www.simplyfunded.co.uk/application/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white text-[#2b5fcc] px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-3"
          >
            <span>Apply in 60 Seconds</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>

          <a
            href="tel:01642057445"
            className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-[#2b5fcc] transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-3"
          >
            <Phone size={20} />
            <span>Speak to a Funding Specialist</span>
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl max-w-2xl mx-auto">
          <p className="text-lg font-semibold mb-2">Get £5,000 - £100,000 within 24 hours</p>
          <p className="text-sm opacity-90">Quick approval, Minimal paperwork, No hidden fees</p>
        </div>
      </div>
    </section>
  );
}
