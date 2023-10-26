import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

export const ImageCarousel = ({ services }) => {
  return (
    <div className="">
      <div className="pointer-events-none mx-auto max-w-7xl py-1">
        <Carousel
          ssr
          autoPlay
          infinite
          deviceType="tablet"
          swipeable={false}
          draggable={false}
          showDots={false}
          arrows={false}
          keyBoardControl={false}
          responsive={responsive}
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="pointer-events-none flex flex-col items-center justify-center rounded-3xl border-2 h-36 w-72 bg-cover"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="text-center">
                <p className="font-bold text-black text-lg">{item.name}</p>
                <p className="">{item.nearby} nearby</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
