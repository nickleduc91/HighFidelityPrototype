// Import required libraries for the spinning carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Responsive options for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 2,
  },
};

//Services that are displayed under the most popular section within the carousel
const services = [
  {
    name: "Haircut",
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
    name: "Personal Chefs",
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

// Functional component which displays the Most Popular section on the home page
/**
 * 
 * @param {function} handleClickCategory
 * @returns 
 */
const MostPopular = ({ handleClickCategory }) => {

  //Renders the html for the component
  return (
    <div>
      <h1 className="font-bold text-2xl pb-10">Most Popular</h1>
      <div className="">
        <div className="mx-auto max-w-7xl py-1">
          <Carousel
            ssr
            autoPlay
            infinite
            deviceType=""
            swipeable={false}
            draggable={false}
            showDots={false}
            arrows={false}
            keyBoardControl={false}
            responsive={responsive}
            autoPlaySpeed={3500}
          >
            {services.map((item, index) => (
              <div
                onClick={() => handleClickCategory(item.name)}
                key={index}
                className="flex flex-col items-center justify-center rounded-3xl border-2 h-36 w-72 bg-cover cursor-pointer"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="text-center bg-indigo-500 px-2 rounded-2xl hover:bg-indigo-600">
                  <p className="font-bold text-white text-lg">{item.name}</p>
                  <p className="text-white">{item.nearby} nearby</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
