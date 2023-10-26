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
    image:
      "https://athleticsweekly.com/wp-content/uploads/2020/11/PT-image-via-OriGym.jpg",
  },
  {
    name: "Perosnal Chefs",
    nearby: 8,
    image:
      "https://secret-ingredient.com/wp-content/uploads/2017/05/Privatechef_CW.jpg",
  },
  {
    name: "Hockey Trainers",
    nearby: 9,
    image:
      "https://cdn1.sportngin.com/attachments/photo/7052/6828/NCCP_large.png",
  },
];

const Recommended = () => {
  return (
    <div className="">
      <h1 className="font-bold text-2xl pb-10 text-center">Recommended</h1>
      <div className="grid grid-cols-2 gap-y-10 place-items-center">
        {services.map((item, index) => (
          <div
            key={index}
            className="pointer-events-none flex flex-col items-center justify-center rounded-3xl border-2 h-32 w-64 bg-cover"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="text-center">
              <p className="font-bold text-black text-lg">{item.name}</p>
              <p className="">{item.nearby} nearby</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
