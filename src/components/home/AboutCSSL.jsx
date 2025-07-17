import aboutCSSLData from "../../data/components/aboutCSSL.data";
import styles from "./AboutCSSL.module.css"; // CSS module for styles

const AboutCSSL = () => {
  return (
    <section className={styles.ntAboutCSSLSectionWrapper}>
      <div className={styles.ntAboutCSSLContainer}>
        <div className={styles.ntAboutCSSLImageWrapper}>
          <img src={aboutCSSLData.logo} alt="CSSL Logo" className={styles.ntAboutCSSLLogo} />
        </div>
        <div className={styles.ntAboutCSSLContentWrapper}>
          <div className={styles.ntAboutCSSLContent}>
            <h2 className="nt-section-title nt-title-light-bg nt-aboutcssl-title">{aboutCSSLData.title}</h2>
            <p className={styles.ntAboutCSSLDescription}>
              {aboutCSSLData.description1}
            </p>
            <p className={styles.ntAboutCSSLDescription}>
              {aboutCSSLData.description2}
            </p>
            <p className={styles.ntAboutCSSLDescription}>
              {aboutCSSLData.description3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCSSL;
