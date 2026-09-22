import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Leak from "@/components/Leak";
import Audit from "@/components/Audit";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Close from "@/components/Close";
import Footer from "@/components/Footer";
import GetStartedDrawer from "@/components/GetStartedDrawer";
import SelfAssessment from "@/components/SelfAssessment";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <SelfAssessment />
        <Leak />
        <Audit />
        <Services />
        <Proof />
        <Pricing />
        <Faq />
      </main>
      <Close />
      <Footer />
      <GetStartedDrawer />
    </>
  );
}
