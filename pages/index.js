import Image from "next/image";
import Header from "@/components/header";
import MostPopular from "@/components/mostPopular";
import Recommended from "@/components/recommended";
import Saved from "@/components/saved";

const testSavedServicesData = [
  {
    name: "Haircuts",
    nearby: 25,
    image:
      "https://cdn.britannica.com/53/136653-050-E8AE6706/Hairdresser-curling-iron.jpg",
    address: "131 shepody circle",
    rating: 4,
    storeType: "Local",
    price: 69,
  },
  {
    name: "Personal Trainers",
    nearby: 13,
    image:
      "https://athleticsweekly.com/wp-content/uploads/2020/11/PT-image-via-OriGym.jpg",
    address: "131 shepody circle",
    rating: 4,
    storeType: "Local",
    price: 69,
  },
  {
    name: "Perosnal Chefs",
    nearby: 8,
    image:
      "https://secret-ingredient.com/wp-content/uploads/2017/05/Privatechef_CW.jpg",
    address: "131 shepody circle",
    rating: 4,
    storeType: "Local",
    price: 69,
  },
  {
    name: "Hockey Trainers",
    nearby: 9,
    image:
      "https://cdn1.sportngin.com/attachments/photo/7052/6828/NCCP_large.png",
    address: "131 shepody circle",
    rating: 4,
    storeType: "Local",
    price: 69,
  },
];

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen px-20">
      <Header />
      <MostPopular />
      <div className="pt-14 grid grid-cols-2 divide-x-2 divide-gray-300">
        <Recommended />
        <Saved services={testSavedServicesData} />
      </div>
    </div>
  );
}
