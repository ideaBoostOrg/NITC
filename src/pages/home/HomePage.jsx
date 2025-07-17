import About from "../../components/home/About";
import AboutCSSL from "../../components/home/AboutCSSL";
import Afflicants from "../../components/home/Afflicants";
import AnnualPartners from "../../components/home/Annual_Partners";
import Awards from "../../components/home/Awards";
import DIS from "../../components/home/DIS";
import Footer from "../../components/home/Footer";
import Gallery from "../../components/home/Gallery";
import Hero from "../../components/home/Hero";
import InformationBar from "../../components/home/InformationBar";
import Map from "../../components/home/Map";
import NationalPartners from "../../components/home/National_partners";
import Partners from "../../components/home/Partners";
import Schedule from "../../components/home/Schedule";
import Sponsors from "../../components/home/Sponsors";
import TicketPricing from "../../components/home/TicketPricing";
import Navbar from "../../components/layout/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <InformationBar />
      <Schedule />
      <Awards />
      <Gallery />
      <TicketPricing />
      <AboutCSSL />
       <DIS />
      <NationalPartners />
      <Sponsors />
      <Partners />
      <Afflicants />
      <AnnualPartners />
      <Map />
      <Footer /> 
    </>
  );
}

export default HomePage;
