import '../../assets/css/ticketpricing.css';
import pricingData from "../../data/components/ticketPricing.data";

function TicketPricing() {
  const { sectionTitle, sectionSubtitle, pricingDetails } = pricingData;
  return (
    <div className="nt-pricing-section-wrapper">
        <div className="row">
            <div className="col-12">
                <div className="nt-pricing-title-section">
                    <h2 className="nt-section-title nt-title-dark-bg nt-pricing-title wow fadeInUp" data-wow-delay="0.2s">
                        {sectionTitle}
                    </h2>
                    <p className="nt-pricing-sub-title wow fadeInDown" data-wow-delay="0.2s">
                        {sectionSubtitle}
                    </p>
                </div>
            </div>
        </div>
        <div className="row">
            {pricingDetails.map((pricing, index) => (
                <div className="col-lg-3 col-md-6 col-sm-12 mb-3 px-1" key={index}>
                    <div
                        className={`nt-price-block-wrapper ${index === 0 ? "nt-full-pack-wrapper" : ""}`}
                        data-wow-delay="0.3s"
                    >
                        <div className="nt-price-card-content">
                            <span className="nt-price-card-title">{pricing.title}</span>
                            <div className={`${index === 0 ? "nt-feature-list-full-pack" : "nt-feature-list"}`}>
                                <ul style={{ textAlign: "left" }}>
                                    {pricing.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={`${index === 0 ? "nt-price-card-footer-full-package" : "nt-price-card-footer"}`}>
                            <div className="nt-prices-section">
                                <p className="nt-local-price">{pricing.priceLKR}</p>
                                <p className="nt-usd-price">{pricing.priceUSD}</p>
                            </div>
                            <a href={pricing.link} className={`nt-price-card-btn ${index === 0 ? "nt-full-pack-btn" : ""}`}>
                                {pricing.buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default TicketPricing;
