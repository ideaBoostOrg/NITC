
/*icon */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { eventImages } from '../../../assets/img'

function Gallery() {
  return (
    <section id="gallery" className="section-padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2
                className="section-title wow fadeInUp animated"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDelay: "0.2s",
                  MozAnimationDelay: "0.2s",
                  animationDelay: "0.2s",
                }}
              >
                Event Gallery
              </h2>

              {/* <p
                className="wow fadeInDown animated"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDelay: "0.2s",
                  MozAnimationDelay: "0.2s",
                  animationDelay: "0.2s",
                }}
              >
                Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
                vocent mediocritatem an <br /> cule dicta iriure at phaedrum.
              </p> */}
            </div>
          </div>
        </div>

        <div className="grid-of-5-cols">
          {eventImages.map((image, index) => (
            <div key={index} className="">
              <img className="img-fluid" alt="" src={image} />
              {/* <div className="overlay-box text-center">
                <a className="lightbox" href={image}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div> */}
            </div>
          ))}
        </div>


        {/* <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" alt="" src={image1} />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href={image1}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" alt="" src={image2} />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href={image2}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" alt="" src={image3} />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href={image3}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" alt="" src={image4} />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href={image4}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" alt="" src={image5} />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href={image5}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" alt="" src={image6} />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href={image6}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" alt="" src={image7} />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href={image7}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" alt="" src={image8} />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href={image8}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" alt="" src={image9} />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href={image9}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" alt="" src={image10} />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href={image10}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" alt="" src={image11} />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href={image11}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" alt="" src={image12} />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href={image12}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" alt="" src={image13} />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href={image13}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" alt="" src={image14} />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href={image14}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" alt="" src={image15} />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href={image15}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon"
                    style={{ fontSize: 10 }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="row justify-content-center mt-3">
          <div className="col-xs-12">
            <a href="#" className="btn btn-common">
              Browse All
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Gallery;
