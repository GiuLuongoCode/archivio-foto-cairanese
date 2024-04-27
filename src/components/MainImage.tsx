import Image from "next/image";
const MainImage = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="row-start-1 col-start-1 z-20">
        <Image
          src="/cairano.svg"
          alt="logo"
          width={0}
          height={0}
          className="absolute w-screen h-[437px]"
        />
      </div>
      <div className="row-start-1 col-start-1 z-30">
        <Image
          src="/rullino.svg"
          alt="logo"
          width={0}
          height={0}
          className="absolute w-1/4 h-[300px] -left-[145px] top-[235px]"
        />
      </div>
    </div>
  );
};

export default MainImage;
