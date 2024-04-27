"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Raleway, Great_Vibes } from "next/font/google";
import MainImage from "./MainImage";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { useEffect, useState } from "react";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const raleway = Raleway({
  subsets: ["latin"],
});

const MainCard = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      {!isMobile && isClient ? (
        <Card>
          <CardHeader>
            <CardTitle
              className={`text-wrap text-5xl md:text-7xl lg:text-9xl ${greatVibes.className}`}
            >
              <p>Archivio</p>
              <p>Fotografico</p>
              <p>Cairanese</p>
            </CardTitle>

            <CardDescription
              className={`text-wrap mb-8 text-base md:text-lg lg:text-base font-normal leading-relaxed w-full md:w-3/4 ${raleway.className}`}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              inventore cum ipsum, eligendi libero temporibus impedit quo
              facere, omnis, nihil excepturi cupiditate labore adipisci qui?
              Adipisci enim est in sequi?
            </CardDescription>
          </CardHeader>
          <CardContent className="relative w-full my-3 mx-3 border-2 border-brown-600 bg-gradient-to-b from-brown-400 to-brown-300 p-6 shadow-lg z-0">
            <div className="relative w-full overflow-visible z-10">
              <MainImage></MainImage>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div
          className={` mb-4 flex flex-col justify-center items-center text-wrap text-5xl md:text-7xl lg:text-9xl ${greatVibes.className}`}  
        >
          <p>Archivio</p>
          <p>Fotografico</p>
          <p>Cairanese</p>
          <Image
            src="/rullino.svg"
            alt="logo"
            width={0}
            height={0}
            className="w-1/4"
          />
        </div> 
      )}
    </>
  );
};

export default MainCard;
