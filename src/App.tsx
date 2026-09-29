import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuSection from '@/components/MenuSection';
import Recommendations from '@/components/Recommendations';
import BookingForm from '@/components/BookingForm';
import Banquets from '@/components/Banquets';
import Atmosphere from '@/components/Atmosphere';
import Terrace from '@/components/Terrace';
import Social from '@/components/Social';
import Reviews from '@/components/Reviews';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

function App() {
  return (
    <div className="min-h-screen bg-basil-cream pb-16 sm:pb-0">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Recommendations />
        <BookingForm />
        <Banquets />
        <Atmosphere />
        <Terrace />
        <Social />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

export default App;
