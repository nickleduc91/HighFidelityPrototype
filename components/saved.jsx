// Functional component which displays the user's saved services on the home page
/**
 *
 * @param {array} services
 * @returns
 */
const Saved = ({ services }) => {
  // Renders the html for the component
  return (
    <div>
      <h1 className="font-bold text-2xl pb-10 text-center">Saved Services</h1>
      {services.length > 0 ? (
        <div className="grid grid-cols-2 gap-y-6 place-items-center">
          {services.map((item, index) => (
            <div
              key={index}
              className="pointer-events-none rounded-3xl border-2 h-40 w-64"
            >
              <div className="col-span-2 bg-white h-40 rounded-3xl pt-1 shadow-2xl">
                <p className="font-bold pl-4">{item.name}</p>
                <p>
                  <i className="ri-map-pin-line pl-4"></i>
                  {item.address}
                </p>
                <p>
                  <i className="ri-star-line pr-1 pl-4"></i>
                  {item.rating}/5
                </p>
                <p className="pl-4">{item.storeType}</p>
                <p className="mt-8 pl-4">${item.price} CAD</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-lg">
          You do not have any saved services at this time.
        </div>
      )}
    </div>
  );
};

export default Saved;
