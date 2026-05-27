import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { OurCreatives } from "@/components/sections/OurCreatives";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <OurCreatives />
      <Experience />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
      <div className="footer-reveal-wrapper pb-[10vh] md:pb-[15vh]">
        <Footer />
      </div>
    </>
  );
}
