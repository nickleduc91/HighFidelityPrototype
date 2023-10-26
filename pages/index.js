import Image from "next/image";
import Header from "@/components/header";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen px-20">
      <Header />
      <h1 className="font-bold text-2xl">Most Popular</h1>
      
    </div>
  );
}
