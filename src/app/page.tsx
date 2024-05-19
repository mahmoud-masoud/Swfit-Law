import Brief from '@/components/home/Brief';
import Hero from '@/components/home/Hero';
import Reviews from '@/components/home/Reviews';
import HomeContact from '@/components/home/contact/HomeContact';
import Places from '@/components/home/places/Places';
import Services from '@/components/home/services/Services';
import Why from '@/components/home/why/Why';

const Home = () => {
  return (
    <main>
      <Hero />
      <Brief />
      <Services />
      <Places />
      <Why />
      <Reviews />
      <HomeContact />
    </main>
  );
};
export default Home;
