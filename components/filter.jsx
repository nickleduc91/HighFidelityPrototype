import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Filter = ({
  handleSetPrice,
  handleSetRating,
  handleSetValues,
  price,
  rating,
  values,
  handleSearch,
}) => {
  return (
    <header>
      <nav className="pt-4">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="border-2 rounded-full p-4 bg-white shadow-xl">
            <form className="flex flex-row divide-x-2 divide-gray-200">
              <div className="mr-5 hover:text-indigo-500 flex flex-row">
                <i
                  className={classNames(
                    price ? "text-indigo-500" : "",
                    "ri-money-dollar-circle-line ri-lg pt-1",
                  )}
                ></i>
                <input
                  className={classNames(
                    price ? "text-indigo-500" : "",
                    "pl-2 bg-transparent transition ease-in-out focus:outline-none w-32",
                  )}
                  placeholder="Price"
                  value={price}
                  onChange={(e) => handleSetPrice(e.target.value)}
                />
              </div>
              <div className="mr-5 hover:text-indigo-500 pl-2">
                <i
                  className={classNames(
                    rating ? "text-indigo-500" : "",
                    "ri-star-line ri-lg pt-1",
                  )}
                ></i>
                <input
                  className={classNames(
                    rating ? "text-indigo-500" : "",
                    "pl-2 bg-transparent transition ease-in-out focus:outline-none w-32",
                  )}
                  placeholder="Rating"
                  value={rating}
                  onChange={(e) => handleSetRating(e.target.value)}
                />
              </div>
              <div className="mr-5 hover:text-indigo-500 pl-2">
                <i
                  className={classNames(
                    values ? "text-indigo-500" : "",
                    "ri-emotion-line ri-lg pt-1",
                  )}
                ></i>
                <input
                  className={classNames(
                    values ? "text-indigo-500" : "",
                    "pl-2 bg-transparent transition ease-in-out focus:outline-none w-32",
                  )}
                  placeholder="Values"
                  value={values}
                  onChange={(e) => handleSetValues(e.target.value)}
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
