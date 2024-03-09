import Navbar from "@/components/Navbar";

export default function Home() {
  return (
   <div className="flex flex-col">
    <Navbar />
    <div className="p-4 bg-neutral-800">
      <p>Hello World!</p>
    </div>
   </div>
  );
}
