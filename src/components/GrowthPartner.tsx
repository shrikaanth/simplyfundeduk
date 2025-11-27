import { LineChart, CheckSquare, TrendingUp } from 'lucide-react';

export default function GrowthPartner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#3d75ef] to-[#5d8fff] rounded-3xl p-12 lg:p-16 text-white shadow-2xl">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              More Than a Lender – Your Growth Partner
            </h2>
            <p className="text-xl leading-relaxed opacity-95">
              Beyond providing funding, we offer tools that help businesses become stronger and more efficient.
              This includes our free SME business health check, where we help identify ways to reduce costs,
              optimise operations, and improve cashflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all">
              <LineChart className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Business Health Check</h3>
              <p className="opacity-90">Free analysis to identify growth opportunities</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all">
              <CheckSquare className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Cost Optimisation</h3>
              <p className="opacity-90">Strategies to reduce expenses and improve margins</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all">
              <TrendingUp className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Cashflow Support</h3>
              <p className="opacity-90">Tools and guidance for better financial management</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold mb-2">Our goal is simple:</p>
            <p className="text-xl opacity-95">
              Fuel your growth with finance that works in the real world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
