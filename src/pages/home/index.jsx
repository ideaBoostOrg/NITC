import Navbar from "../../components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Vedio from "./components/Vedio";
import Shedule from "./components/Shedule";
import DIS from "./components/DIS";
import Awards from "./components/Awards";
import About_CSSL from "./components/About_CSSL";
import Gallery from "./components/Gallery";
import Ticket_pricing from "./components/Ticket_pricing";
import Sponsors from "./components/Sponsors";
import National_partners from "./components/National_partners";
import Partners from "./components/Partners";
import Afflicants from "./components/Afflicants";
import Annual_partners from "./components/Annual_Partners";
import Map from "./components/Map";
import Footer from "./components/Footer";

function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Vedio />
      <Shedule />
      <Awards />
      <DIS />
      <Gallery />
      <Ticket_pricing />
      <About_CSSL />
      <National_partners />
      <Sponsors />
      <Partners />
      <Afflicants />
      <Annual_partners />
      <Map />
      <Footer />
    </>
  );
}

export default index;
