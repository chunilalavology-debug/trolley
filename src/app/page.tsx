import { Footer } from "@/components/layout/Footer";
import { CreativeSteps } from "@/components/sections/CreativeSteps";
import { DistinctiveDesigns } from "@/components/sections/DistinctiveDesigns";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { RenownedClients } from "@/components/sections/RenownedClients";
import { Services } from "@/components/sections/Services";
import { SupportHelp } from "@/components/sections/SupportHelp";
import { WhatMakesUsDifferent } from "@/components/sections/WhatMakesUsDifferent";
import { SendMessageTab } from "@/components/ui/SendMessageTab";

export default function Home() {
  return (
    <>
      <Hero />
      <CreativeSteps />
      <WhatMakesUsDifferent />
      <Services />
      <RenownedClients />
      <Partners />
      <DistinctiveDesigns />
      <SupportHelp />
      <Footer />
      <SendMessageTab />
    </>
  );
}
