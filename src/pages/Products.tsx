import Header from '../components/Header';
import ProductHero from '../components/ProductHero';
import ProductBenefits from '../components/ProductBenefits';
import FundingUses from '../components/FundingUses';
import ProductProcess from '../components/ProductProcess';
import ProductEligibility from '../components/ProductEligibility';
import ProductCTA from '../components/ProductCTA';
import Footer from '../components/Footer';

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductHero />
      <ProductBenefits />
      <FundingUses />
      <ProductProcess />
      <ProductEligibility />
      <ProductCTA />
      <Footer />
    </div>
  );
}
