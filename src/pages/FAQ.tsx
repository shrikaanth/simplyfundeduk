import Header from '../components/Header';
import FAQHero from '../components/FAQHero';
import FAQAccordion from '../components/FAQAccordion';
import FAQEligibility from '../components/FAQEligibility';
import FAQProcess from '../components/FAQProcess';
import Footer from '../components/Footer';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FAQHero />
      <FAQAccordion />
      <FAQEligibility />
      <FAQProcess />
      <Footer />
    </div>
  );
}
