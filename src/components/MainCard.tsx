import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Raleway, Great_Vibes } from "next/font/google";
import Image from "next/image";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const raleway = Raleway({
  subsets: ["latin"],
});

const MainCard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className={`text-wrap text-9xl ${greatVibes.className}`}>
            <p>Archivio</p>
            <p>Fotografico</p>
            <p>Cairanese</p>
          </CardTitle>
          <CardDescription
            className={`text-wrap mb-8 text-base font-normal leading-relaxed w-3/4 ${raleway.className}`}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            inventore cum ipsum, eligendi libero temporibus impedit quo facere,
            omnis, nihil excepturi cupiditate labore adipisci qui? Adipisci enim
            est in sequi?
          </CardDescription>
        </CardHeader>
        <CardContent className="relative w-full h-[477px] my-3 mx-3 border-2 border-brown-600 bg-gradient-to-b from-brown-400 to-brown-300 p-6 shadow-lg">
          <div className="relative  w-full h-[477px] overflow-hidden">
          <Image
            src="/cairano.svg"
            alt="logo"
            width={0}
            height={0}
            className="absolute w-screen h-[437px]"
          />
          </div>
          <Image
            src="/rullino.svg"
            alt="logo"
            width={0}
            height={0}
            className="absolute w-1/4 h-[300px] -left-[145px] top-[235px]"
          />
        </CardContent>
      </Card>
    </>
  );
};

export default MainCard;
