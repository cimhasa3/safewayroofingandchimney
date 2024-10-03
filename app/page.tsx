import Advantage from "../components/landing_page/Advantage";
import ContactForm from "../components/landing_page/ContactForm";
import FeaturedCTA from "../components/shared/FeaturedCTA";
import Hero from "../components/landing_page/Hero";
import OurServices from "../components/landing_page/OurServices";
import Services from "../components/landing_page/Services";
import ExploreOurGallery from "@/components/shared/ExploreOurGallery";
import Coupons from "@/components/shared/Coupons";
import FAQ from "@/components/shared/FAQ";
import Testimonials from "@/components/shared/Testimonials";
import SingleSubscription from "@/components/landing_page/SingleSubscription";
import ShortFaq from "@/components/shared/ShortFaq";

export default function Home() {
  return (
    <>
      <Hero />
      <ContactForm />
      <Services />
      <FeaturedCTA
        image="/images/home-featured.png"
        title="Why Safeway Roofing Is The Best On Long Island "
        description={
          <p>
            For our valued customers throughout Suffolk and Nassau counties, we
            are committed to providing a comprehensive suite of services
            tailored to enhance your property. Specializing in GAF-brand shingle
            roofs, we offer expert installation and repairs not only for roofing
            but also for siding, windows, gutters, and chimneys. Whether
            it&apos;s wood and composite decks or vinyl and cement board siding,
            our team works diligently to ensure your home or business remains
            safe, dry, and visually appealing. Trust us to bring unparalleled
            craftsmanship and aesthetic excellence to every project
          </p>
        }
        ctaLabel="Talk To a Roofing Specialist"
        ctaHref="#"
      />
      <Advantage />
      <OurServices />
      <ExploreOurGallery />
      <Testimonials />
      <SingleSubscription />
      <FAQ />
      <Coupons />
      <ShortFaq />
    </>
  );
}
