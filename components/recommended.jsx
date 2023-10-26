const services = [
  {
    name: "Soccer Trainer",
    nearby: 14,
    image:
      "https://media.istockphoto.com/id/1199392125/photo/young-soccer-trainer-coach-explaining-tactic-on-team-sports-tactics-board-children-during.jpg?s=170667a&w=0&k=20&c=GZ5XVkZ9m0oN-xfJmvI89HhQkBC1x6ue8iR41n5QVSQ=",
  },
  {
    name: "Plumbing",
    nearby: 37,
    image:
      "https://goodbeeplumbinganddrains.com/wp-content/uploads/2023/01/iStock-1341381755-1024x683.jpg",
  },
  {
    name: "Gardening",
    nearby: 10,
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/02/featured-image-landscaper.jpeg",
  },
  {
    name: "Tutoring",
    nearby: 41,
    image:
      "https://www.corpnet.com/wp-content/uploads/2019/02/Female-Tutor-Working-With-Male-Student.jpg",
  },
];

const Recommended = ({ handleClickCategory }) => {
  return (
    <div className="">
      <h1 className="font-bold text-2xl pb-10 text-center">Recommended</h1>
      <div className="grid grid-cols-2 gap-y-10 place-items-center">
        {services.map((item, index) => (
          <div
            onClick={() => handleClickCategory(item.name)}
            key={index}
            className="flex flex-col items-center justify-center rounded-3xl border-2 h-36 w-72 bg-cover cursor-pointer"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="text-center bg-indigo-500 hover:bg-indigo-600 px-2 rounded-2xl">
              <p className="font-bold text-white text-lg">{item.name}</p>
              <p className="text-white">{item.nearby} nearby</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
