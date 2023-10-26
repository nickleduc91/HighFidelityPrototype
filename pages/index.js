import Image from "next/image";
import Header from "@/components/header";
import MostPopular from "@/components/mostPopular";
import Recommended from "@/components/recommended";
import Saved from "@/components/saved";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen px-20">
      <Header />
      <MostPopular />
      <div className="pt-14 grid grid-cols-2 divide-x-2 divide-gray-300">
        <Recommended />
        <Saved services={[]} />
      </div>
    </div>
  );
}
