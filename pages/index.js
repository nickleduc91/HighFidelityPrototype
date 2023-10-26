import Image from "next/image";
import Header from "@/components/header";
import MostPopular from "@/components/mostPopular";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen px-20">
      <Header />
      <MostPopular />
    </div>
  );
}
