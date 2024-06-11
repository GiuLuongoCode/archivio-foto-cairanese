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
      <div className="py-10 hidden sm:flex">
        <div className="flex w-1/3 ">
          <div className="flex flex-col">
            <div
              className={`text-wrap text-5xl lg:text-7xl xl:text-9xl ${greatVibes.className}`}
            >
              <p>Archivio</p>
              <p>Fotografico</p>
              <p>Cairanese</p>
            </div>

            <div
              className={`text-wrap mb-8 text-base md:text-lg lg:text-base font-normal leading-relaxed w-full md:w-3/4 ${raleway.className}`}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              inventore cum ipsum, eligendi libero temporibus impedit quo
              facere, omnis, nihil excepturi cupiditate labore adipisci qui?
              Adipisci enim est in sequi?
            </div>
          </div>
        </div>

        <div className="flex w-2/3 pl-4">
          <div className="w-full pl-0 lg:pl-20">
            <div className="border-2 w-full h-full relative z-10">
              <Image
                src='/cairano.svg'
                alt="logo"
                priority={true}
                width={0}
                height={0}
                className="absolute w-full h-full p-3"
              />

              <Image
                src='/rullino.svg'
                alt="rullino"
                width={100}
                priority={true}
                height={1000}
                className="absolute w-1/4 h-[300px] -left-14 lg:-left-20 -bottom-24 lg:-bottom-18 xl:-bottom-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden pt-8">
        <div
          className={`flex flex-col justify-center items-center text-7xl ${greatVibes.className}`}
        >
          <p>Archivio</p>
          <p>Fotografico</p>
          <p>Cairanese</p>

          <Image
            src="/rullino.svg"
            alt="logo"
            width={0}
            priority={true}
            height={0}
            className="w-1/2 mt-8"
          />
        </div>
      </div>
    </>
  );
};

export default MainCard;
