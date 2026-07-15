import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStats from '@/components/TrustStats';
import WhyArtificial from '@/components/WhyArtificial';
import Collections from '@/components/Collections';
import Weddings from '@/components/Weddings';
import Corporate from '@/components/Corporate';
import Wholesale from '@/components/Wholesale';
import Comparison from '@/components/Comparison';
import Gallery from '@/components/Gallery';
import Social from '@/components/Social';
import Shipping from '@/components/Shipping';
import Faq from '@/components/Faq';
import { FAQ_SCHEMA } from '@/lib/faqs';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <TrustStats />
        <WhyArtificial />
        <Collections />
        <Weddings />
        <Corporate />
        <Wholesale />
        <Comparison />
        <Gallery />
        <Social />
        <Shipping />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
