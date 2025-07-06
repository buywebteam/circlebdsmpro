import AboutUsSection from "../Components/Aboutus";
import FAQ from "../Components/FAQs";
import Hero from "../Components/Hero";
import Hero2 from "../Components/Hero2";
import Services from "../Components/Services";
import TestimonialSection from "../Components/Testimonial";

function Home() {
  return (
    <div>
      <Hero />
      <Hero2 />
      <AboutUsSection />
      <Services />
      <TestimonialSection />
      <FAQ />
    </div>
  );
}

export default Home;
