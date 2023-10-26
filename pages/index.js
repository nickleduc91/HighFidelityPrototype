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
    name: "Yards Unlimited Landscaping Inc.",
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
  let searchResults = [];

  const handleSearch = () => {
    // Do something with the input values (location, service, and storeType)
    console.log("Location:", location);
    console.log("Service:", service);
    console.log("Store Type:", storeType);
    setServiceResults(
      data
        .filter((item) => {
          // All filters are applied
          return (
            item.location === location &&
            item.service === service &&
            item.storeType === storeType
          );
        })
        .map((item, index) => {
          // Transform or process the filtered items here
          return item;
        })
    );
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
          <MostPopular />
          <div className="pt-14 grid grid-cols-2 divide-x-2 divide-gray-300">
            <Recommended />
            <Saved services={testSavedServicesData} />
          </div>
        </div>
      )}
    </div>
  );
}
