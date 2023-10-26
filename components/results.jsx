import Ottawa from "../pages/images/Ottawa.png";
import Image from "next/image";
import Filter from "./filter";

const businesses = [
    {
        "name": "Peaky Barbers",
        "address": "123 Hunt Club Rd.",
        "rating": "4.78",
        "storeType": "Local",
        "price": "20"
    },
    {
        "name": "Peaky Barbers",
        "address": "123 Hunt Club Rd.",
        "rating": "4.78",
        "storeType": "Local",
        "price": "20"
    },
    {
        "name": "Peaky Barbers",
        "address": "123 Hunt Club Rd.",
        "rating": "4.78",
        "storeType": "Local",
        "price": "20"
    },
    {
        "name": "Peaky Barbers",
        "address": "123 Hunt Club Rd.",
        "rating": "4.78",
        "storeType": "Local",
        "price": "20"
    },
    {
        "name": "Peaky Barbers",
        "address": "123 Hunt Club Rd.",
        "rating": "4.78",
        "storeType": "Local",
        "price": "20"
    },
    {
        "name": "Peaky Barbers",
        "address": "123 Hunt Club Rd.",
        "rating": "4.78",
        "storeType": "Local",
        "price": "20"
    },
    {
        "name": "Peaky Barbers",
        "address": "123 Hunt Club Rd.",
        "rating": "4.78",
        "storeType": "Local",
        "price": "20"
    },
    {
        "name": "Peaky Barbers",
        "address": "123 Hunt Club Rd.",
        "rating": "4.78",
        "storeType": "Local",
        "price": "20"
    }
]

const Results = ({ services }) => {
    return (
        <div className="flex flex-row space-x-10 justify-center">
            <div className="bg-white h-screen w-screen mb-10 rounded-2xl">
                <div className="mx-10 my-3 flex flex-row">
                    <p className="text-2xl">Distance</p>
                    
                    <p className="text-2xl">3 km</p>
                </div>
                <div>
                    <Image src={Ottawa} alt="Ottawa" className="h-auto w-full"/>
                </div>                
            </div>
            <div className="bg-white h-screen w-screen mb-10 rounded-2xl">
                <Filter/>
                <div className="px-8 pt-6">
                    <div className="grid grid-cols-2 gap-y-10 place-items-center">
                        {businesses.map((item, index) => (
                            <div
                            key={index}
                            className="pointer-events-none rounded-3xl border-2 h-40 w-64"
                            >
                                <div className="col-span-2 bg-white h-40 rounded-3xl pt-1 shadow-lg">
                                    <p className="font-bold pl-4 text-xl">{item.name}</p>
                                    <p>
                                    <i className="ri-map-pin-line pr-1 pl-4"></i>
                                    {item.address}
                                    </p>
                                    <p>
                                    <i className="ri-star-line pr-1 pl-4"></i>
                                    {item.rating}/5
                                    </p>
                                    <p className="pl-4">{item.storeType}</p>
                                    <p className="mt-7 pl-4 font-bold text-gray-600">${item.price} CAD</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
