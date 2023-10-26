import { useState } from "react";
/**
 * 
 * @param {*} param0 
 * @returns 
 */
const Header = ({handleSetIsSearch}) => {
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [storeType, setStoreType] = useState("");
  const handleSearch = () => {
    // Do something with the input values (location, service, and storeType)
    console.log("Location:", location);
    console.log("Service:", service);
    console.log("Store Type:", storeType);
    handleSetIsSearch(true)
  };
  return (
    <header>
      <nav className="bg-gray-100 px-4 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <i onClick={() => handleSetIsSearch(false)} className="ri-search-eye-fill ri-3x text-indigo-500" />
          </div>
          <div className="border-2 rounded-full p-4 bg-white shadow-xl px-6">
            <form className="flex flex-row divide-x-2 divide-gray-200">
              <div className="mr-20 hover:text-indigo-500">
                <i className="ri-map-pin-line ri-lg"></i>
                <input
                  className="pl-2 bg-transparent transition ease-in-out focus:outline-none"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="mr-20 hover:text-indigo-500 pl-2">
                <i className="ri-service-line ri-lg"></i>
                <input
                  className="pl-2 bg-transparent transition ease-in-out focus:outline-none"
                  placeholder="Service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                />
              </div>
              <div className="mr-20 hover:text-indigo-500 pl-2">
                <i className="ri-building-2-line ri-lg"></i>
                <input
                  className="pl-2 bg-transparent transition ease-in-out focus:outline-none"
                  placeholder="Store Type"
                  value={storeType}
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
          <div className="flex items-center border-2 rounded-full p-4 bg-white shadow-xl">
            <div className="flex flex-row">
              <span className="ml-2">EN</span>
              <i className="pl-4 ri-user-3-line text-indigo-500 ri-lg pt-1 px-2"></i>
            </div>
          </div>
        </div>
      </nav>
      <hr className="my-6"></hr>
    </header>
  );
};

export default Header;
