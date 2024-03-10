import MainCard from "@/components/MainCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
   <div className="flex flex-col">
    <Navbar />
    <MainCard></MainCard>
   </div>
  );
}
