import { HeroSection } from "@/components/sections/hero";
import CoursesSection, { Our_Cource_Cards_Section } from "@/components/sections/Our_Cource_Cards_Section";
import Contact_us_Main_Section from "@/components/sections/contact_us";
import Our_team from "@/components/sections/Our_team";
import CTA_Donate_or_vol from "@/components/sections/CTA_Donate_or_vol";
import Our_Projects_Cards_Section from "@/components/sections/our_projects_cards_section";
import Award_Cards_Section from "@/components/sections/Award_Cards_Section";
import PartnerSection from "@/components/sections/our-partners";


export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>

      <Our_Projects_Cards_Section></Our_Projects_Cards_Section>

      <Our_Cource_Cards_Section></Our_Cource_Cards_Section>
      <Our_team />
      <Award_Cards_Section></Award_Cards_Section>
      <PartnerSection></PartnerSection>
      <CTA_Donate_or_vol></CTA_Donate_or_vol>
      <Contact_us_Main_Section></Contact_us_Main_Section>

    </>
  );
}
