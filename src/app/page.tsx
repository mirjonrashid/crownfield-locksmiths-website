import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import TrustedBrands from "@/components/TrustedBrands";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup />
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <ServiceAreas />
      <Testimonials />
      <Blog />
      <FAQ />
      <ContactForm />
      <TrustedBrands />
      <Footer />
      <MobileCTA />
    </main>
  );
}
