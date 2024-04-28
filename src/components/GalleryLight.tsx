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
import { Key } from "react";
import { gql } from "graphql-tag";
import { getClient } from "@/graphql/apolloClient";

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

const SEARCH_IMAGES = gql`
  query SearchImages($query: String, $tags: [String]) {
    searchImages(query: $query, tags: $tags) {
      id
      name
      descriptio
      url
    }
  }
`;

export async function Gallery() {
  // infinte scroll
  //   const { ref, inView } = useInView();

  const client = getClient();
  const {data} = await client.query({
    query: SEARCH_IMAGES,
  });

  console.log(data.searchImages);

  // const {loading, error, data} = useQuery(SEARCH_IMAGES, {
  //   variables: { query: "Giuseppe" },
  // });
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  // Infinite scroll
  //   useEffect(() => {
  //     if (inView) {
  //       setImages([...images, ...secondImages]);
  //     }
  //   }, [inView]);

  // const loadMoreImages = () => {
  //   setImages([...images, ...secondImages]);
  // };

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
        {data?.searchImages?.map((photo: { url: string | undefined; id: Key | null | undefined; name: string | undefined; }) => {
          return (
            <a href={photo.url} key={photo.id}>
              <img
                alt={photo.name}
                src={photo.url}
                className="max-w-full block py-5 px-0 rounded-lg transition-transform duration-200 hover:filter hover:opacity-90 hover:scale-101"
              />
            </a>
          );
        })}
      </LightGallery>
      <button className="border-solid border-2 border-gray-300 p-2 hover:bg-gray-500">Load More</button>
    </div>
  );
}
