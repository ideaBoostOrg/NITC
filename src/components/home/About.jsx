import aboutData from "../../data/components/about.data";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles["nt-about-section-wrapper"]}>
      <div className={styles["nt-about-container"]}>
        <div className={styles["nt-about-image-wrapper"]}>
          <img src={aboutData.mainImage} alt="About NITC Conference" className={styles["nt-about-image"]} />
          <img src={aboutData.logo} alt="CSSL Logo" className={styles["nt-about-logo"]} />
        </div>
        <div className={styles["nt-about-content-wrapper"]}>
          <div className={styles["nt-about-content"]}>
            <h2 className={`${styles["nt-section-title"]} ${styles["nt-title-light-bg"]}`}>{aboutData.title}</h2>
            <p className={styles["nt-about-description"]}>
              <b>{aboutData.description.split(' ')[0]}</b>{" "}
              {aboutData.description.substring(aboutData.description.indexOf(' ') + 1)}
            </p>
            <ul className={styles["nt-about-tracks"]}>
              {aboutData.tracks.map((track, idx) => (
                <li key={idx}>{track}</li>
              ))}
            </ul>
            <button className={styles["nt-about-btn"]}>{aboutData.button}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
