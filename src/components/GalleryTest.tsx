"use client";

import { gql, useQuery } from "@apollo/client";
import MyMasonry from "./MyMasonry";
import { photos } from "./photos";
import { apolloClient } from "../../graphql/apolloClient";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

type Props = {
  search?: string | undefined;
};

export default function GalleryTest({ search }: Props) {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="w-full flex py-8">
      <div className="w-full justify-center">
        {loading && <BeatLoader color="#353535" /> }
        {error && <p>Errore: {error}</p>}
        
        {photos && (
          <div>
            {
              <MyMasonry results={photos} limit={photos.length} searchKey="" />
            }    
          </div>
        )}
      </div>
    </div>
  );
}
