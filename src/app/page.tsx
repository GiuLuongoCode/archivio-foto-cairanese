import MainCard from "@/components/MainCard";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { Gallery } from "@/components/GalleryLight";

export default function Home() {
  return (
    <div className="flex flex-col p-7">
      <Navbar />
      <MainCard></MainCard>
      <SearchBar></SearchBar>
      <Gallery></Gallery>
    </div>
  );
}
