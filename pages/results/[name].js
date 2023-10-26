import Header from "@/components/header";

let name = "Peaky Barbers";
let address = "123 Hunt Club Rd.";
let rating = "4.78";
let storeType = "Local";
let price = "20";

const Business = ({ service }) => {
  return (
    <div className="bg-gray-100 min-h-screen px-20">
      <Header />
      <div className="mt-10">
        <h1 className="font-bold text-4xl">{name}</h1>
        <div className="flex flex-row text-gray-500 my-3">
          <i className="ri-star-line pr-1"></i>
          <p>{rating} / 5</p>

          <i className="ri-map-pin-line pr-1 pl-10"></i>
          <p>{address}</p>

          <i class="ri-building-2-line pr-1 pl-10"></i>
          <p>{storeType}</p>
        </div>

        <div className="grid gap-2 grid-cols-2">
          <div>
            <img
              className="h-full rounded-l-2xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
              alt=""
            />
          </div>
          <div class="grid grid-cols-2 gap-2">
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
                <i class="ri-calendar-check-fill ri-xl font-bold"></i>
                <p className="ml-2 font-bold text-xl">Open seven days a week</p>
              </div>
              <div className="flex flex-row mt-12 mb-12 text-2xl">
                <i class="ri-parking-box-line ri-xl font-bold"></i>
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
            <div className="m-5 flex flex-row">
              <p>
                <b className="text-2xl">${price} CAD</b> + tax
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
