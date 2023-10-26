const BusinessPage = ({ service }) => {
  return (
    <div className="bg-gray-100 min-h-screen px-20">
      <div className="mt-10">
        <h1 className="font-bold text-4xl">{service.name}</h1>
        <div className="flex flex-row text-gray-500 my-3">
          <i className="ri-star-line pr-1"></i>
          <p>{service.rating} / 5</p>

          <i className="ri-map-pin-line pr-1 pl-10"></i>
          <p>{service.address}</p>

          <i className="ri-building-2-line pr-1 pl-10"></i>
          <p>{service.storeType}</p>
        </div>

        <div className="grid gap-2 grid-cols-2">
          <div>
            <img
              className="h-full rounded-l-2xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="rounded-tr-2xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="rounded-br-2xl"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-5">
          <div className="mx-3 col-span-3">
            <hr className="my-6"></hr>
            <div>
              <div className="flex flex-row mb-8 mt-12 text-2xl">
                <i className="ri-calendar-check-fill ri-xl font-bold"></i>
                <p className="ml-2 font-bold text-xl">Open seven days a week</p>
              </div>
              <div className="flex flex-row mt-12 mb-12 text-2xl">
                <i className="ri-parking-box-line ri-xl font-bold"></i>
                <p className="ml-2 font-bold text-xl">Free Parking</p>
              </div>
            </div>
            <hr className="my-6"></hr>
            <div className="mb-10">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur
              </p>
            </div>
          </div>
          <div className="bg-white my-6 rounded-2xl shadow-lg col-span-2">
            <div className="mx-5 mt-5 mb-3 flex flex-row">
              <p>
                <b className="text-2xl">${service.price} CAD</b> + tax
              </p>
            </div>
            <hr className="mx-5"></hr>
            <p className="mx-5 mt-3 font-bold text-xl">Socials</p>
            <div className="mx-5">
                <div className="flex flex-row my-3 text-lg">
                    <i className="ri-phone-line mr-1 my-2 ri-xl"></i>
                    <p className="my-1">{service.phoneNumber}</p>
                </div>
                <div className="flex flex-row my-3 text-lg">
                    <i className="ri-instagram-line mr-1 my-2 ri-xl"></i>
                    <p className="my-1">{service.instagram}</p>
                </div>
                <div className="flex flex-row my-3 text-lg">
                    <i className="ri-mail-line mr-1 my-2 ri-xl"></i>
                    <p className="my-1">{service.email}</p>
                </div>
            </div>
            <p className="mx-5 mt-10 font-bold text-xl">Values</p>
            <ul className="mx-5 mt-3 mb-6">
                {service.busiVals.map((item, index) => (
                    <li className="text-indigo-500 border-2 border-indigo-500 rounded-2xl px-2 bg-indigo-100 w-fit my-2" key={index}>
                        <p>{item}</p>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
