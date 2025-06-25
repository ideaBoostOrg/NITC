import Navbar from "../../components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import InformationBar from "./components/InformationBar";
import Schedule from "./components/Schedule";
import Awards from "./components/Awards";
import AboutCSSL from "./components/AboutCSSL";
import Gallery from "./components/Gallery";
import TicketPricing from "./components/TicketPricing";
// import DIS from "./components/DIS";
// import Sponsors from "./components/Sponsors";
// import National_partners from "./components/National_partners";
// import Partners from "./components/Partners";
// import Afflicants from "./components/Afflicants";
// import Annual_partners from "./components/Annual_Partners";
// import Map from "./components/Map";
// import Footer from "./components/Footer";

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
      <AboutCSSL />
      {/* <DIS />
      <National_partners />
      <Sponsors />
      <Partners />
      <Afflicants />
      <Annual_partners />
      <Map />
      <Footer /> */}
    </>
  );
}

export default index;
