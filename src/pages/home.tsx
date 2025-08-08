import Navigation from "@/components/home/navigation";
import HeroSection from "@/components/home/herosection";
import MissingClubsSection from "@/components/home/missingclubssection";
import WhatIsNexusSection from "@/components/home/whatisnextsection";
import BranchClubsSection from "@/components/home/brachclubssection";
import InitialProjectsSection from "@/components/home/initialprojectssection";
import WhyWeNeedYouSection from "@/components/home/whydoweneedyousection";
import ItBeginsSection from "@/components/home/itbeginssection";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-nexus-dark text-white overflow-x-hidden"
      data-testid="page-home"
    >
      <Navigation />
      <HeroSection />
      <MissingClubsSection />
      <WhatIsNexusSection />
      <BranchClubsSection />
      <InitialProjectsSection />
      <WhyWeNeedYouSection />

      <ItBeginsSection />
      <Footer />
    </div>
  );
}
