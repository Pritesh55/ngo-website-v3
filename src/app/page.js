import { AwardsSection } from "@/components/sections/awards";

import { HeroSection } from "@/components/sections/hero";

import Image from "next/image";
import PartnerSection from "@/components/sections/our-partners";
import Contact_us_Main_Section from "@/components/sections/contact_us";
import Our_Leadership_page from "./(about-us)/our-leadership/page";
import Success_Stories_page from "./(about-us)/success-story/page";

export default function Home() {
  return (
    <>

      <HeroSection></HeroSection>

      <Success_Stories_page></Success_Stories_page>
      <AwardsSection></AwardsSection>

      <PartnerSection></PartnerSection>
      <div className="2xl:container mx-auto"></div>
      <Contact_us_Main_Section></Contact_us_Main_Section>

    </>
  );
}
