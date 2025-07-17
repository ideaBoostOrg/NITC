import React from "react";
import "../../../assets/css/image_gallery.css";
import { eventImages } from "../../../data/components/eventGallery.data";

const firstImageSet = eventImages.slice(0, 3).map((src, idx) => ({
  src,
  alt: `Event ${idx + 1}`,
}));

const secondImageSet = eventImages.slice(3, 7).map((src, idx) => ({
  src,
  alt: `Event ${idx + 4}`,
}));


function ImageGallery() {
  return (
    <>
        <div className="nt-gallery-grid-1">
            {firstImageSet.map((img, idx) => (
                <div className={`nt-gallery-item nt-gallery-item-${idx + 1}`} key={idx}>
                    <img src={img.src} alt={img.alt} />
                </div>
            ))}
        </div>
        <div className="nt-gallery-grid-2">
            {secondImageSet.map((img, idx) => (
                <div className={`nt-gallery-item nt-gallery-item-${idx + 4}`} key={idx}>
                    <img src={img.src} alt={img.alt} />
                </div>
            ))}
        </div>
    </>
  );
}

export default ImageGallery;
