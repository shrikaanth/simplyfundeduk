import Header from '../components/Header';
import ContactHero from '../components/ContactHero';
import ContactDetails from '../components/ContactDetails';
import ContactForm from '../components/ContactForm';
import ContactEligibility from '../components/ContactEligibility';
import ContactProcess from '../components/ContactProcess';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <ContactDetails />
      <ContactForm />
      <ContactEligibility />
      <ContactProcess />
      <Footer />
    </div>
  );
}
