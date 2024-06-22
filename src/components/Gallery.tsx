"use client";

import { gql, useQuery } from "@apollo/client";
import MyMasonry from "./MyMasonry";
import { apolloClient } from "../../graphql/apolloClient";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

type Props = {
  search?: string | undefined;
};

export default function Gallery({ search }: Props) {
  const [data, setData] = useState<any | null>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [observerQuery, setObserverQuery] = useState<any>();
  const ITEMS_PER_PAGE = 30;
  
  
 
    // è necessario adattare il backend in modo che possa rispondere con i seguenti dati. i parametri limit, offset e il dato count sono necessari per creare la paginazione 
    /*
        limit: quanti elementi vengono caricati per volta
        offset: il punto in cui si è arrivati con il caricamento precedente, inizialmente 0
        count: restituisce il numero di tutti gli elementi 
    */
    const SEARCH_IMAGES_FILTERED = gql`
        query SearchImages($search: String, $tags: [String], $limit: Int, $offset: Int) {
        searchImages(query: $search, tags: $tags, limit: $limit, offset: $offset) {
            count,
            images {
                id
                name
                description
                url
            }
        }
        }
    `;

    const SEARCH_IMAGES = gql`
        query SearchImages($limit: Int, $offset: Int) {
        searchImages(limit: $limit, offset: $offset) {
            count,
            images {
                id
                name
                description
                url
                reactions {
                  name
                  number
                }
                tags {
                  name
                }
                people {
                  name
                }
                views
                likes
            }
        }
        }
    `;

    const GET_searchImages = gql`
    query GetsearchImages($limit: Int, $offset: Int) {
      searchImages(limit: $limit, offset: $offset) {
        count
        results {
          url
          name
          image
        }
      }
    }
    `

    const GET_POKEMON_FILTERED = gql`
    query GetPokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            sprites {
                front_default
            }
        }
    }
    `

 
    const SEARCH_RICKMORTY_FILTERED = gql`
    query searchRM($name: String) {
      characters(filter: { name: $name }) {
        results {
          name
          gender
          status
          image
        }
      }
    }
    `;

    const SEARCH_RICKMORTY = gql`
    query {
      characters(page: 1) {
        results {
          name
          gender
          status
          image
        }
      }
    }
    `;


    useEffect(() => {
        const observableQuery = apolloClient.watchQuery({
            query: search !== undefined ? SEARCH_IMAGES_FILTERED : SEARCH_IMAGES,
            variables: search !== undefined ? {
            name: search
        } : { 
            offset: 0, limit: ITEMS_PER_PAGE 
        },
        });

        const subscription = observableQuery.subscribe({
        next(result) {
            setData(search !== undefined ? result.data.searchImages : result.data.searchImages)
            setLoading(false)        
            if(search == undefined) {
              console.log(result)
                setHasMore(result.data.searchImages.images.length < result.data.searchImages.count ? true : false)
            }
            
        },
        error(err) {
            setError(err)
            setLoading(false)
        },
        });

        setObserverQuery(observableQuery)

        return () => subscription.unsubscribe()
    }, []);


  const loadMore = () => {
    if (!observerQuery) return

    setLoading(true)

    observerQuery
      .fetchMore({
        variables: {
          offset: data.results.length,
          limit: ITEMS_PER_PAGE,
        },

        updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
          if (!fetchMoreResult) return prevResult
            setHasMore(prevResult.searchImages.images.length < fetchMoreResult.searchImages.count ? true : false)

            return {
                searchImages: {
                    count: fetchMoreResult.searchImages.count,
                    results: [
                        ...prevResult.searchImages.image,
                        ...fetchMoreResult.searchImages.images,
                    ],
            },
          };
        },
      })
      .then((searchImages: any) => {
        setData(searchImages.image)
        setLoading(false);
      })
      .catch((err: any) => {
        setError(err)
        setLoading(false)
      });
  };

  return (
    <div className="w-full flex py-8">
      <div className="w-full justify-center">
        {loading && <BeatLoader color="#353535" /> }
        {error && <p>Errore: {error}</p>}
        
        {data && (
          <div>
            {   
                search !== undefined ? <div className="flex flex-col items-center">
                    <div className="p-4">
                        {
                            data.id !== null ? <img src={data.sprites.front_default} alt={data.name} /> :
                            <div className="w-full h-[50vh] flex justify-center pt-14">
                                Nessun risultato trovato
                            </div>
                        }
                    </div>
                    <h3 className="text-black font-medium">{data.name}</h3>
                </div>  :
                data.images.length > 0 ? (
                <MyMasonry results={data.images} limit={data.images.length} />
            ) : (
              <div className="w-full h-[50vh] flex justify-center pt-14">
                Nessun risultato trovato
              </div>
            )}
            
            {
                hasMore && (
                        <div
                            onClick={loadMore}
                            className="flex justify-center items-center py-8"
                        >
                            { 
                                loading ? <BeatLoader color="#353535" /> : 
                                <div className="border px-4 py-2 hover:cursor-pointer hover:bg-[#000] hover:text-[#fff] transition-all duration-150 ease-in">
                                    <p className="text-black">Carica altro</p>
                                </div>
                            }
                        </div>
                    
            )}
          </div>
        )}
      </div>
    </div>
  );
}
