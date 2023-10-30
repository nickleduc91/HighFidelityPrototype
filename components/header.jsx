// Helper fucntion to add logic to the html class names
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Functional component which displays the header, this includes the top search bar and handles the user input for it
/**
 *
 * @param {function} handleSearch
 * @param {useState} handleSetIsSearch
 * @param {useState} handleSetLocation
 * @param {useState} handleSetService
 * @param {useState} handleSetStoreType
 * @param {string} service
 * @param  {string} location
 * @param {string} storeType
 * @param {useState} handleSetIsBusiness
 * @returns
 */
const Header = ({
  handleSearch,
  handleSetIsSearch,
  handleSetLocation,
  handleSetService,
  handleSetStoreType,
  service,
  location,
  storeType,
  handleSetIsBusiness,
}) => {
  //Fucntion to reset values once logo is clicked
  const handleClickLogo = () => {
    handleSetIsSearch(false);
    handleSetIsBusiness(false);
    handleSetLocation("");
    handleSetService("");
    handleSetStoreType("");
  };

  //Renders the html for the component
  return (
    <header>
      <nav className="bg-gray-100 px-4 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <i
              onClick={() => handleClickLogo()}
              className="ri-search-eye-fill ri-3x text-indigo-500 hover:text-indigo-600 cursor-pointer"
            />
          </div>
          <div className="border-2 rounded-full p-4 bg-white shadow-xl px-6">
            <form className="flex flex-row divide-x-2 divide-gray-200">
              <div className="mr-20 hover:text-indigo-500">
                <i
                  className={classNames(
                    location ? "text-indigo-500" : "",
                    "ri-map-pin-line ri-lg",
                  )}
                ></i>
                <input
                  className={classNames(
                    location ? "text-indigo-500" : "",
                    "pl-2 bg-transparent transition ease-in-out focus:outline-none",
                  )}
                  placeholder="Location"
                  value={location}
                  onChange={(e) => handleSetLocation(e.target.value)}
                />
              </div>
              <div className="mr-20 hover:text-indigo-500 pl-2">
                <i
                  className={classNames(
                    service ? "text-indigo-500" : "",
                    "ri-service-line ri-lg",
                  )}
                ></i>
                <input
                  className={classNames(
                    service ? "text-indigo-500" : "",
                    "pl-2 bg-transparent transition ease-in-out focus:outline-none",
                  )}
                  placeholder="Service"
                  value={service}
                  onChange={(e) => handleSetService(e.target.value)}
                />
              </div>
              <div className="mr-20 hover:text-indigo-500 pl-2">
                <i
                  className={classNames(
                    storeType ? "text-indigo-500" : "",
                    "ri-building-2-line ri-lg",
                  )}
                ></i>
                <input
                  className={classNames(
                    storeType ? "text-indigo-500" : "",
                    "pl-2 bg-transparent transition ease-in-out focus:outline-none",
                  )}
                  placeholder="Store Type"
                  value={storeType}
                  onChange={(e) => handleSetStoreType(e.target.value)}
                />
              </div>
              <div
                className="hover:text-indigo-500 pl-2 cursor-pointer"
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
