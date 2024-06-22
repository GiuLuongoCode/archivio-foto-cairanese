import Gallery from "@/components/Gallery";
import GalleryTest from "@/components/GalleryTest";
import MainCard from "@/components/MainCard";
import Searchbar from "@/components/Searchbar/Searchbar";

export default function Home() {
  return (
    <div className="flex flex-col p-7">
      <MainCard />
      <Searchbar />
      <Gallery />
      {/* <GalleryTest /> */}
    </div>
  );
}
