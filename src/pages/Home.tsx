import Header from '../components/Header';
import Hero from '../components/Hero';
import WhySection from '../components/WhySection';
import Advantages from '../components/Advantages';
import Eligibility from '../components/Eligibility';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhySection />
      <Advantages />
      <Eligibility />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}
