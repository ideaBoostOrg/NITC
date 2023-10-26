import Navbar from "../../components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Countbar from "./components/Countbar";
import Vedio from "./components/Vedio";
import Shedule from "./components/Shedule";
// import Vedio_section from "./components/Vedio_section";
// import Introduction from "./components/Introduction";
import Awards from "./components/Awards";
import About_CSSL from "./components/About_CSSL";
// import Counter_area from "./components/Counter_area";
// import Event_gallery from "./components/Event_gallery";
// import CSSL_digital_investment_submit from "./components/CSSL_digital_investment_submit";
// import CSSL_colloquium from "./components/CSSL_colloquium";
// import CSSL_awards from "./components/CSSL_awards";
import Gallery from "./components/Gallery";
import Ticket_pricing from "./components/Ticket_pricing";
import Sponsors from "./components/Sponsors";
import Partners from "./components/Partners";
import Afflicants from "./components/Afflicants";
import Map from "./components/Map";
import Footer from "./components/Footer";

function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Countbar />
      <About />
      {/* <Vedio_section /> */}
      <Vedio />
      <Shedule />
      {/* <Introduction /> */}
      <About_CSSL />
      {/* <CSSL_digital_investment_submit /> */}
      {/* <CSSL_awards />
      <CSSL_colloquium /> */}
      <Awards />
      {/* <Counter_area />
      <Event_gallery /> */}
      <Gallery />
      <Ticket_pricing />
      <Sponsors />
      <Partners />
      <Afflicants />
      <Map />
      <Footer />
    </>
  );
}

export default index;
