import Navbar from "../../components/Navbar";
import About from "./components/About";
import AboutCSSL from "./components/AboutCSSL";
import Afflicants from "./components/Afflicants";
import AnnualPartners from "./components/Annual_Partners";
import Awards from "./components/Awards";
import DIS from "./components/DIS";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import InformationBar from "./components/InformationBar";
import Map from "./components/Map";
import NationalPartners from "./components/National_partners";
import Partners from "./components/Partners";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import TicketPricing from "./components/TicketPricing";

function index() {
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
      <DIS />
      <AboutCSSL />
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

export default index;
