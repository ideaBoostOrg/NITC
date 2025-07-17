import informationBarDataContent from "../../../data/components/informationBarData";
import "../../../assets/css/informationBar.css";

function InformationBar() {
  return (
    <div className="nt-informationBar-bg">
      <div className="nt-info-container ">
        <div className="nt-informationBar-titlesection-wrapper">
          <h2 className="nt-section-title nt-title-dark-bg">
            {informationBarDataContent.informationBarTitle}
          </h2>
          <span className="nt-titlesection-description">
            {informationBarDataContent.informationBarDescription}
          </span>
        </div>
        <div className="nt-info-wrapper">
          {informationBarDataContent.informationBarDetails.map((item, idx) => (
            <div
              className="nt-info-card"
              id={`nt-info-card-${idx + 1}`}
              key={idx}
            >
              <div className="nt-info-card-content">
                <p className="nt-info-card-title">{item.title}</p>
                <p className="nt-info-card-main-content">
                  {item.mainContent.includes("th") ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.mainContent.replace(
                          /(\d+)(th|st|nd|rd)/g,
                          "$1<sup>$2</sup>"
                        ),
                      }}
                    />
                  ) : (
                    item.mainContent
                  )}
                </p>
                {item.subContent && (
                  <p className="nt-info-card-sub-content">{item.subContent}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InformationBar;

