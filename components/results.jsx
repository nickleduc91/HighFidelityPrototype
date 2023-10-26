import Ottawa from "../pages/images/Ottawa.png";
import Image from "next/image";
import Filter from "./filter";
import { useState } from "react";

const Results = ({ services, handleSetIsBusiness, handleSetIsSearch, findBusiness }) => {
  const [sliderValue, setSliderValue] = useState(40);
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value); // Update the slider value when it changes
  };

  const handleClick = (name) => {
    findBusiness(name)
    handleSetIsBusiness(true)
    handleSetIsSearch(false)
  }
  return (
    <div className="flex flex-row space-x-10 justify-center">
      <div className="bg-white h-full w-screen mb-10 rounded-2xl">
        <div className="mx-10 my-3 flex flex-row">
          <input
            type="range"
            min={0}
            max={100}
            value={sliderValue}
            className="w-full h-2 bg-gray-200 text-indigo-500 rounded-lg appearance-none cursor-pointer"
            onChange={handleSliderChange}
          />
        </div>
        <div>
          <Image
            src={Ottawa}
            alt="Ottawa"
            className="h-full w-full rounded-b-2xl"
          />
        </div>
      </div>
      <div className="bg-white h-full w-screen pb-8 rounded-2xl">
        <div className="px-4">
          <Filter />
        </div>
        <div className="px-8 pt-6">
          <div className="grid grid-cols-2 gap-y-10 place-items-center">
            {services.map((item, index) => (
              <div
                onClick={() => handleClick(item.name)}
                key={index}
                className="rounded-3xl border-2 h-40 w-64 cursor-pointer"
              >
                <div className="col-span-2 bg-white h-40 rounded-3xl pt-1 shadow-lg">
                  <p className="font-bold pl-4 text-xl">{item.name}</p>
                  <p>
                    <i className="ri-map-pin-line pr-1 pl-4"></i>
                    {item.address}
                  </p>
                  <p>
                    <i className="ri-star-line pr-1 pl-4"></i>
                    {item.rating}/5
                  </p>
                  <p className="pl-4">{item.storeType}</p>
                  <p className="mt-7 pl-4 font-bold text-gray-600">
                    ${item.price} CAD
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
