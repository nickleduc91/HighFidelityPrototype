const services = [
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

const Saved = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl pb-10 text-center">Saved Services</h1>
      {services.length > 0 ? (
        <div className="grid grid-cols-2 gap-y-6 place-items-center">
          {services.map((item, index) => (
            <div
              key={index}
              className="pointer-events-none rounded-3xl border-2 h-40 w-64"
            >
              <div className="col-span-2 bg-white h-40 rounded-3xl pt-1 shadow-2xl">
                <p className="font-bold pl-4">{item.name}</p>
                <p>
                  <i className="ri-map-pin-line pl-4"></i>
                  {item.address}
                </p>
                <p>
                  <i className="ri-star-line pr-1 pl-4"></i>
                  {item.rating}/5
                </p>
                <p className="pl-4">{item.storeType}</p>
                <p className="mt-8 pl-4">${item.price} CAD</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-lg">
          You do not have any saved services at this time.
        </div>
      )}
    </div>
  );
};

export default Saved;
