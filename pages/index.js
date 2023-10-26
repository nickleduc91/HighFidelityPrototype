import Header from "@/components/header";
import MostPopular from "@/components/mostPopular";
import Recommended from "@/components/recommended";
import Saved from "@/components/saved";
import { useState } from "react";
import Results from "@/components/results";
import BusinessPage from "@/components/businessPage";

const testSavedServicesData = [];

const data = [
  {
    name: "Handsen Landscaping",
    location: "Ottawa",
    service: "Gardening",
    storeType: "Local",
    price: "20",
    phoneNumber: "613-123-4536",
    instagram: "hadnsen4life",
    email: "handsen@gmail.com",
    address: "123 stree",
  },
  {
    name: "Primo Landscaping",
    location: "Ottawa",
    service: "Gardening",
    storeType: "Franchise",
    price: "29",
    phoneNumber: "613-423-4686",
    instagram: "primo_land",
    email: "primo@gmail.com",
    address: "11 circle",
  },
  {
    name: "Rule's Landscaping",
    location: "Ottawa",
    service: "Gardening",
    storeType: "Local",
    price: "20",
    phoneNumber: "613-111-4116",
    instagram: "WeRuleLandscaping",
    email: "rulers@gmail.com",
    address: "2 small st",
  },
  {
    name: "Local Gardening Services",
    location: "Ottawa",
    service: "Gardening",
    storeType: "Local",
    price: "20",
    phoneNumber: "613-123-4536",
    instagram: "localgardening",
    email: "local@gmail.com",
    address: "1 up str",
  },

  {
    name: "Yards Landscaping",
    location: "Ottawa",
    service: "Gardening",
    storeType: "Franchise",
    price: "28",
    email: "yards@example.com",
    address: "123 Main Street, Ottawa",
    phoneNumber: "(555) 123-4567",
    instagram: "@yardslandscaping",
  },
  {
    name: "Fatima Salon Ottawa",
    location: "Ottawa",
    service: "Haircut",
    storeType: "Local",
    price: "28",
    email: "fatima@example.com",
    address: "456 Elm Street, Ottawa",
    phoneNumber: "(555) 987-6543",
    instagram: "@fatimasalonottawa",
  },
  {
    name: "First Choice Haircutters Brampton",
    location: "Brampton",
    service: "Haircut",
    storeType: "Franchise",
    price: "28",
    email: "firstchoice@example.com",
    address: "789 Oak Street, Brampton",
    phoneNumber: "(555) 111-2222",
    instagram: "@firstchoicebrampton",
  },
  {
    name: "Furelli Hair Design",
    location: "Ottawa",
    service: "Haircut",
    storeType: "Franchise",
    price: "28",
    email: "furelli@example.com",
    address: "101 Pine Street, Ottawa",
    phoneNumber: "(555) 333-4444",
    instagram: "@furellihairdesign",
  },
  {
    name: "Andre Hair Design",
    location: "Ottawa",
    service: "Haircut",
    storeType: "Local",
    price: "28",
    email: "andre@example.com",
    address: "202 Cedar Street, Ottawa",
    phoneNumber: "(555) 555-5555",
    instagram: "@andrehairdesign",
  },
];

export default function Home() {
  const [isSearch, setIsSearch] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);

  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [storeType, setStoreType] = useState("");
  const [serviceResults, setServiceResults] = useState([]);
  const [business, setBusiness] = useState("");

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
    setService(category);

    // Use the filters to filter the data
    setServiceResults(
      data
        .filter((item) => {
          // All filters are applied
          return item.service === category;
        })
        .map((item) => {
          // Transform or process the filtered items here
          return item;
        }),
    );

    setIsSearch(true);
  };

  const findBusiness = (name) => {
    data.map((item) => {
      if (item.name == name) {
        setBusiness(item);
      }
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen px-20">
      <Header
        handleSearch={handleSearch}
        handleSetIsSearch={setIsSearch}
        handleSetLocation={setLocation}
        handleSetService={setService}
        handleSetStoreType={setStoreType}
        handleSetIsBusiness={setIsBusiness}
        location={location}
        storeType={storeType}
        service={service}
      />
      {isSearch ? (
        <div>
          <Results
            services={serviceResults}
            handleSetIsBusiness={setIsBusiness}
            handleSetIsSearch={setIsSearch}
            findBusiness={findBusiness}
          />
        </div>
      ) : isBusiness ? (
        <div>
          <BusinessPage service={business} />
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
