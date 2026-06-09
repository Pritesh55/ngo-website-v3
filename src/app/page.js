import { HeroSection } from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import CoursesSection from "@/components/sections/courses";
import Contact_us_Main_Section from "@/components/sections/contact_us";
import Our_team from "@/components/sections/Our_team";
import CTA_Donate_or_vol from "@/components/sections/CTA_Donate_or_vol";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <ProjectsSection></ProjectsSection>

      <div className="2xl:container mx-auto">
        <CoursesSection></CoursesSection>
      </div>

      {/* <!-- 6 ▸ OUR TEAM ----------------------------------------------- --> */}
      <Our_team />
      <CTA_Donate_or_vol></CTA_Donate_or_vol>
      <Contact_us_Main_Section></Contact_us_Main_Section>

    </>
  );
}
