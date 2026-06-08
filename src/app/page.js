import { HeroSection } from "@/components/sections/hero";
import CoursesSection from "@/components/sections/courses";
import Contact_us_Main_Section from "@/components/sections/contact_us";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>

      <div className="2xl:container mx-auto">
        <CoursesSection></CoursesSection>
      </div>
      
      <Contact_us_Main_Section></Contact_us_Main_Section>

    </>
  );
}
