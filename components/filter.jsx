import { useState } from "react";

const data = [
  {
    location: "Ottawa",
    service: "Fencing",
    storeType: "Apartment",
    name: "Landscape.io",
    price: "20",
  },
  {
    location: "Ottawa",
    service: "Plumbing",
    storeType: "Building",
    name: "Plumber 4 life",
    price: "20",
  },
  {
    location: "Ottawa",
    service: "Electrician",
    storeType: "Apartment",
    name: "Landscape.io",
    price: "20",
  },
  {
    location: "Ottawa",
    service: "Hair Cutting",
    storeType: "Parlor",
    name: "Furellis",
    price: "20",
  },
  {
    location: "Ottawa",
    service: "Hair Cutting",
    storeType: "House",
    name: "Landscape.io",
    price: "20",
  },
  {
    location: "Ottawa",
    service: "Fencing",
    storeType: "Apartment",
    name: "Landscape.io",
    price: "20",
  },
  {
    location: "Ottawa",
    service: "Fencing",
    storeType: "Apartment",
    name: "Landscape.io",
    price: "20",
  },
];

const Filter = () => {
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [values, setValues] = useState("");
  const handleSearch = () => {
    // Do something with the input values (location, service, and storeType)
    console.log("Price:", price);
    console.log("Rating:", rating);
    console.log("Values:", values);
  };
  return (
    <header>
      <nav className="pl-8 pt-4 pb-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="border-2 rounded-full p-4 bg-white shadow-xl px-6">
            <form className="flex flex-row divide-x-2 divide-gray-200">
              <div className="mr-5 hover:text-indigo-500 flex flex-row">
                <i class="ri-money-dollar-circle-line ri-lg pt-1"></i>
                <input
                  className="pl-2 bg-transparent transition ease-in-out focus:outline-none"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="mr-5 hover:text-indigo-500 pl-2">
                <i class="ri-star-line ri-lg pt-1"></i>
                <input
                  className="pl-2 bg-transparent transition ease-in-out focus:outline-none"
                  placeholder="Rating"
                  value={rating}
                  onChange={(e) => setService(e.target.value)}
                />
              </div>
              <div className="mr-5 hover:text-indigo-500 pl-2">
                <i class="ri-emotion-line ri-lg pt-1"></i>
                <input
                  className="pl-2 bg-transparent transition ease-in-out focus:outline-none"
                  placeholder="Values"
                  value={values}
                  onChange={(e) => setStoreType(e.target.value)}
                />
              </div>
              <div
                className="hover:text-indigo-500 pl-2"
                onClick={handleSearch}
              >
                <i className="ri-search-line ri-lg"></i>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Filter;
