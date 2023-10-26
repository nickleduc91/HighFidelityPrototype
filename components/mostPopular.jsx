import Carousel from "@/components/carousel";

const services = [
  {
    name: "Haircuts",
    nearby: 25,
    image:
      "https://cdn.britannica.com/53/136653-050-E8AE6706/Hairdresser-curling-iron.jpg",
  },
  {
    name: "Personal Trainers",
    nearby: 13,
    image: "https://athleticsweekly.com/wp-content/uploads/2020/11/PT-image-via-OriGym.jpg"
  },
  {
    name: "Perosnal Chefs",
    nearby: 8,
    image: "https://secret-ingredient.com/wp-content/uploads/2017/05/Privatechef_CW.jpg"
  },
  {
    name: "Hockey Trainers",
    nearby: 9,
    image: "https://cdn1.sportngin.com/attachments/photo/7052/6828/NCCP_large.png"
  },
];

const MostPopular = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl pb-10">Most Popular</h1>
      <Carousel services={services} />
    </div>
  );
};

export default MostPopular;
