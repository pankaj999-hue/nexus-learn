"use client";

import { Icons } from "@/components/ui/icons";
import { HeroSection } from "@/components/hero-section";
import { AboutUs } from "./_components/about-us";
import { WhyUse } from "./_components/why-use";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection
        badge={{
          text: "New courses added weekly",
          action: {
            text: "Browse Courses",
            href: "/courses",
          },
        }}
        title="Unlock Your Potential with Our Learning Platform"
        description="Master new skills, track your progress, and achieve your goals with our curated learning paths and interactive lessons — all in one place."
        actions={[
          {
            text: "Get Started",
            href: "/dashboard",
            variant: "default",
          },
        ]}
      />
      <AboutUs />
      <WhyUse />
      <Testimonials />
    </>
  );
}
