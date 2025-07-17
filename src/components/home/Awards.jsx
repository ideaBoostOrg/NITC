import "../../assets/css/awards.css";
import awardsDetails from "../../data/components/awards.data";

const Awards = () => {
  return (
    <section className="nt-awards-section-wrapper">
      <div className="nt-awards-container">
        <div className="nt-awards-content-wrapper">
          <div className="nt-awards-content">
            <h2 className="nt-section-title nt-title-light-bg nt-mobile-view">{awardsDetails.title}</h2>
            <p className="nt-awards-subtitle nt-mobile-view">{awardsDetails.subtitle}</p>
            <p className="nt-awards-description nt-mobile-view">
              {awardsDetails.description}
            </p>            
            <button className="nt-awards-btn">{awardsDetails.button}</button>
          </div>
        </div>
        <div className="nt-awards-image-wrapper">
          <img src={awardsDetails.logo} alt="CSSL Logo" className="nt-awards-logo" />
          <img src={awardsDetails.mainImage} alt="awards NITC Conference" className="nt-awards-image" />
        </div>
      </div>
    </section>
  );
};

export default Awards;
