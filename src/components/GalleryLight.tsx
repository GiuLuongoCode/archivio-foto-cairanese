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
import { Key } from "react";
import { gql } from "graphql-tag";
import { getClient } from "@/graphql/apolloClient";


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
  const client = getClient();
  const {data} = await client.query({
    query: SEARCH_IMAGES,
  });

  console.log(data.searchImages);

  const onInit = () => {
    console.log("lightGallery has been initialized");
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
