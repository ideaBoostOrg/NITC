import "../../../assets/css/awards.css";
import awardsDetails from "../../../data/components/awards.js";

const Awards = () => {
    return (
        <section className="nt-awards-section-wrapper" id="awards">
            <div className="nt-container">
                <div className="nt-awards-content">
                    <div className="nt-awards-header-content">
                        <h2 className="nt-section-title nt-title-light-bg">
                            {awardsDetails.title}
                        </h2>
                        <p className="nt-awards-subtitle" dangerouslySetInnerHTML={{ __html: awardsDetails.subtitle }} />
                        <p className="nt-awards-description" dangerouslySetInnerHTML={{ __html: awardsDetails.description }} />
                        <div className="nt-awards-buttons-container">
                            <button className="nt-apply-now-btn">{awardsDetails.apply_now_button}</button>
                            <button className="nt-view-more-btn">{awardsDetails.view_more_button}</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                            <div className="row">
                                {awardsDetails.awards.map((award, idx) => (
                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3" key={idx}>
                                        <div className="nt-award-item">
                                            <span className="nt-award-title">{award.title}</span>
                                            <ul className="nt-award-types-list">
                                                {award.types.map((type, index) => (
                                                    <li key={index}>{type}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Awards;