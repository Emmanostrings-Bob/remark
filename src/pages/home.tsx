import AboutUs from "@/components/Home/AboutUs";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import News from "@/components/Home/News";
import OurServices from "@/components/Home/OurServices";
import PartnerWithUs from "@/components/Home/PartnerWithUs";
import SolvingProblem from "@/components/Home/SolvingProblem";
import OurProcess from "@/components/Home/OurProcess";

const Home1 = () => {
  return (
    <>
        <Header />
        <Hero />
        <AboutUs />
        <OurServices />
        <OurProcess />
        <SolvingProblem />
        <News />
        <PartnerWithUs />
        <Footer />
    </>
  );
};

export default Home1;
