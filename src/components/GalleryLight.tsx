"use client";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
// Infinite scroll
// import { useInView } from "react-intersection-observer";
import { useState } from "react";

const initImages = [
  { src: "/1.jpg", alt: "Flag of India" },
  { src: "/2.jpg", alt: "2" },
  { src: "/3.jpg", alt: "3" },
  { src: "/4.jpg", alt: "4" },
  { src: "/5.jpg", alt: "5" },
  { src: "/6.jpg", alt: "6" },
  { src: "/7.jpg", alt: "7" },
  { src: "/8.jpg", alt: "8" },
  { src: "/9.jpg", alt: "9" },
];
const secondImages = [
  { src: "/10.jpg", alt: "10" },
  { src: "/11.jpg", alt: "11" },
  { src: "/12.jpg", alt: "12" },
  { src: "/13.jpg", alt: "13" },
  { src: "/14.jpg", alt: "14" },
  { src: "/15.jpg", alt: "15" },
  { src: "/16.jpg", alt: "16" },
  { src: "/17.jpg", alt: "17" },
  { src: "/18.jpg", alt: "18" },
  { src: "/19.jpg", alt: "19" },
];

export function Gallery() {
  // infinte scroll
  //   const { ref, inView } = useInView();
  const [images, setImages] = useState(initImages);
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  // Infinite scroll
  //   useEffect(() => {
  //     if (inView) {
  //       setImages([...images, ...secondImages]);
  //     }
  //   }, [inView]);

  const loadMoreImages = () => {
    setImages([...images, ...secondImages]);
  };
  return (
    <div className="grid grid-cols-1 gap-3">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[
          lgThumbnail,
          lgZoom,
          lgAutoplay,
          lgFullscreen,
          lgRotate,
          lgShare,
        ]}
      >
        {images.map((image, index) => {
          return (
            <a href={image.src} key={index}>
              <img
                alt={image.alt}
                src={image.src}
                className="max-w-full block py-5 px-0 rounded-lg transition-transform duration-200 hover:filter hover:opacity-90 hover:scale-101"
              />
            </a>
          );
        })}
      </LightGallery>
      <button onClick={loadMoreImages}>Load More</button>
    </div>
  );
}
