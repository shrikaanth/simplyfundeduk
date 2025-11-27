import Header from '../components/Header';
import AboutHero from '../components/AboutHero';
import WhoWeAre from '../components/WhoWeAre';
import MissionVision from '../components/MissionVision';
import GrowthPartner from '../components/GrowthPartner';
import AboutProcess from '../components/AboutProcess';
import WhoWeFund from '../components/WhoWeFund';
import AboutCTA from '../components/AboutCTA';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <GrowthPartner />
      <AboutProcess />
      <WhoWeFund />
      <AboutCTA />
      <Footer />
    </div>
  );
}
