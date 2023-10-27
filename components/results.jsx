// Imports for the component
import Ottawa from "../pages/images/Ottawa.png";
import Image from "next/image";
import Filter from "./filter";
import { useState } from "react";

// Functional component which displays the results after a user queries for a service
/**
 * 
 * @param {array} services
 * @param {useState} handleSetIsBusiness
 * @param {useState} handleSetIsSearch
 * @param {function} findBusiness
 * @param {useState} handleSetPrice 
 * @param {useState} handleSetRating
 * @param {useState} handleSetValues  
 * @param {int} price 
 * @param {int} rating 
 * @param {array} values
 * @param {function} handleSearch
 * @returns 
 */
const Results = ({
  services,
  handleSetIsBusiness,
  handleSetIsSearch,
  findBusiness,
  handleSetPrice,
  handleSetRating,
  handleSetValues,
  price,
  rating,
  values,
  handleSearch,
}) => {
  //Handles the value for the slider above the map
  const [sliderValue, setSliderValue] = useState(40);
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value); // Update the slider value when it changes
  };

  //Handles the action when a user clicks one of the results
  const handleClick = (name) => {
    findBusiness(name);
    handleSetIsBusiness(true);
    handleSetIsSearch(false);
  };

  //Renders the html for the component
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
        <div className="px-4 flex items-center justify-center">
          <Filter
            handleSetPrice={handleSetPrice}
            handleSetRating={handleSetRating}
            handleSetValues={handleSetValues}
            price={price}
            rating={rating}
            values={values}
            handleSearch={handleSearch}
          />
        </div>
        {services.length > 1 ? (
          <p className="px-8 text-lg mt-4 font-bold">
            {services.length} businesses found
          </p>
        ) : (
          <p className="px-8 text-lg mt-4 font-bold">
            {services.length} business found
          </p>
        )}
        <div className="px-8 pt-4">
          <div className="grid grid-cols-2 gap-y-4 gap-x-4 place-items-center">
            {services.map((item, index) => (
              <div
                onClick={() => handleClick(item.name)}
                key={index}
                className="rounded-3xl h-60 w-72 cursor-pointer text-black border-1"
              >
                <div className="col-span-2 bg-white hover:bg-gray-100 h-52 rounded-3xl pt-1 shadow-2xl">
                  <i className="ri-heart-line  float-right pr-2 hover:text-indigo-500"></i>
                  <p className="font-bold pl-4 text-xl text-indigo-500 mt-2">
                    {item.name}
                  </p>
                  <p>
                    <i className="text-indigo-500 ri-map-pin-line pr-1 pl-4"></i>
                    {item.address}
                  </p>
                  <p>
                    <i className="text-indigo-500 ri-star-line pr-1 pl-4"></i>
                    {item.rating}/5
                  </p>
                  <p className="pl-4">
                    {item.storeType} <span className="text-black">•</span>{" "}
                    <span className="font-semibold">{item.service}</span>
                  </p>
                  <p className="pl-4"></p>
                  <p className="mt-12 pl-4 font-bold text-black">
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
