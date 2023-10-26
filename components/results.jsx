import Ottawa from "../pages/images/Ottawa.png";
import Image from "next/image";
import Filter from "./filter";

const Results = ({ services }) => {
  return (
    <div className="flex flex-row space-x-10 justify-center">
      <div className="bg-white h-screen w-screen mb-10 rounded-2xl">
        <div className="mx-10 my-3 flex flex-row">
          <p className="text-2xl">Distance</p>

          <p className="text-2xl">3 km</p>
        </div>
        <div>
          <Image src={Ottawa} alt="Ottawa" className="h-auto w-full" />
        </div>
      </div>
      <div className="bg-white h-screen w-screen mb-10 rounded-2xl">
        <Filter />
        <p className="text-2xl">Inside Range</p>
        <p className="text-2xl">Outside Range</p>
      </div>
    </div>
  );
};

export default Results;
