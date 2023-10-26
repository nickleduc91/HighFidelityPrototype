import Image from "next/image";
import Header from "@/components/header";
import MostPopular from "@/components/mostPopular";
import Recommended from "@/components/recommended";
import Saved from "@/components/saved";
import { useState } from "react";
import Results from "@/components/results";

const testSavedServicesData = [];

const data = [
  {
    name: "Handsen Landscaping",
    location: "Ottawa",
    service: "Gardening",
    storeType: "Local",
    price: "20",
  },
  {
    name: "Primo Landscaping",
    location: "Ottawa",
    service: "Gardening",
    storeType: "Franchise",
    price: "29",
  },
  {
    name: "Rule's Landscaping",
    location: "Ottawa",
    service: "Gardening",
    storeType: "Local",
    price: "20",
  },
  {
    name: "Local Gardening Services",
    location: "Ottawa",
    service: "Gardening",
    storeType: "Local",
    price: "20",
  },
  {
    name: "Yards Landscaping",
    location: "Ottawa",
    service: "Gardening",
    storeType: "Franchise",
    price: "28",
  },
  {
    name: "Fatima Salon Ottawa",
    location: "Ottawa",
    service: "Haircut",
    storeType: "Local",
    price: "28",
  },
  {
    name: "First Choice Haircutters Brampton",
    location: "Brampton",
    service: "Haircut",
    storeType: "Franchise",
    price: "28",
  },
  {
    name: "Furelli Hair Design",
    location: "Ottawa",
    service: "Haircut",
    storeType: "Franchise",
    price: "28",
  },
  {
    name: "Andre Hair Design",
    location: "Ottawa",
    service: "Haircut",
    storeType: "Local",
    price: "28",
  },
];

export default function Home() {
  const [isSearch, setIsSearch] = useState(false);
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [storeType, setStoreType] = useState("");
  const [serviceResults, setServiceResults] = useState([]);

  const handleSearch = () => {
    // Do something with the input values (location, service, and storeType)
    const filters = {};

    // Add filters to the object only if they have values
    if (location) {
      filters.location = location;
    }
    if (service) {
      filters.service = service;
    }
    if (storeType) {
      filters.storeType = storeType;
    }
  
    // Use the filters to filter the data
    const filteredData = data.filter((item) => {
      for (const key in filters) {
        if (item[key] !== filters[key]) {
          return false;
        }
      }
      return true;
    });
  
    setServiceResults(filteredData);
  
    setIsSearch(true);
  };

  const handleClickCategory = (category) => {
    // Do something with the input values (location, service, and storeType)
    setService(category)
  
    // Use the filters to filter the data
    setServiceResults(
      data
        .filter((item) => {
          // All filters are applied
          return (
            item.service === category 
          );
        })
        .map((item) => {
          // Transform or process the filtered items here
          return item;
        })
    );

    console.log(serviceResults)
  
    setIsSearch(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-20">
      <Header
        handleSearch={handleSearch}
        handleSetIsSearch={setIsSearch}
        handleSetLocation={setLocation}
        handleSetService={setService}
        handleSetStoreType={setStoreType}
        location={location}
        storeType={storeType}
        service={service}
      />
      {isSearch ? (
        <div>
          <Results services={serviceResults} />
        </div>
      ) : (
        <div>
          <MostPopular handleClickCategory={handleClickCategory} />
          <div className="pt-14 grid grid-cols-2 divide-x-2 divide-gray-300">
            <Recommended handleClickCategory={handleClickCategory} />
            <Saved services={testSavedServicesData} />
          </div>
        </div>
      )}
    </div>
  );
}
