import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Problem from '@/components/landing/Problem';
import Solution from '@/components/landing/Solution';
import ProductPreview from '@/components/landing/ProductPreview';
import Quiz from '@/components/landing/Quiz';
import Advantages from '@/components/landing/Advantages';
import Team from '@/components/landing/Team';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <ProductPreview />
      <Quiz />
      <Advantages />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
