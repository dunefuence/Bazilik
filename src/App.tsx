import { useEffect } from 'react';
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
import { RESTAURANT } from '@/data/site';

function App() {
  useEffect(() => {
    document.title = 'Базилик — ресторан-грилль-бар в Тамбове';

    const metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    metaDesc.content =
      'Ресторан-грилль-бар «Базилик» в Тамбове. Меню, банкетный зал, мероприятия и бронирование столиков.';
    document.head.appendChild(metaDesc);

    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Базилик — ресторан-грилль-бар в Тамбове';
    document.head.appendChild(ogTitle);

    const ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    ogDesc.content =
      'Ресторан-грилль-бар «Базилик» в Тамбове. Меню, банкетный зал, мероприятия и бронирование столиков.';
    document.head.appendChild(ogDesc);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'restaurant';
    document.head.appendChild(ogType);

    // Schema.org Restaurant structured data
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'Базилик',
      description: 'Ресторан-грилль-бар в Тамбове',
      servesCuisine: ['Грилль', 'Европейская', 'Авторская'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ул. Селезнёвская, 2А',
        addressLocality: 'Тамбов',
        addressRegion: 'Тамбовская область',
        addressCountry: 'RU',
      },
      telephone: '+74752558253',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '11:00',
          closes: '23:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Friday', 'Saturday'],
          opens: '11:00',
          closes: '00:00',
        },
      ],
      acceptsReservations: 'True',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      [metaDesc, ogTitle, ogDesc, ogType, script].forEach((el) => el.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-basil-cream">
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
