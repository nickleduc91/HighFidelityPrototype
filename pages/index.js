// Import libraries and components for the main page
import Header from "@/components/header";
import MostPopular from "@/components/mostPopular";
import Recommended from "@/components/recommended";
import Saved from "@/components/saved";
import { useState } from "react";
import Results from "@/components/results";
import BusinessPage from "@/components/businessPage";

// Test data for the user's saved services
const testSavedServicesData = [];

// 'Fake' DB used for the results of the user's queries
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
    address: "123 street",
    rating: "4.22",
    busiVals: ["family-owned", "lgbtq2s+", "diversity", "quality"],
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
    rating: "4.87",
    busiVals: ["respect", "lgbtq2s+", "diversity"],
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
    rating: "4.31",
    busiVals: ["family-owned", "lgbtq2s+", "diversity", "asian-owned"],
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
    rating: "4.98",
    busiVals: [
      "black-owned",
      "lgbtq2s+",
      "diversity",
      "100% customer satisfaction",
    ],
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
    rating: "3.78",
    busiVals: ["quality", "lgbtq2s+", "diversity"],
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
    rating: "5.00",
    busiVals: [
      "family-owned",
      "lgbtq2s+",
      "diversity",
      "100% customer satisfaction",
    ],
  },
  {
    name: "First Choice Haircutters",
    location: "Brampton",
    service: "Haircut",
    storeType: "Franchise",
    price: "28",
    email: "firstchoice@example.com",
    address: "789 Oak Street, Brampton",
    phoneNumber: "(555) 111-2222",
    instagram: "@firstchoicebrampton",
    rating: "2.01",
    busiVals: ["Brampton-owned", "diversity"],
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
    rating: "4.43",
    busiVals: ["lgbtq2s+", "diversity", "sustainability"],
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
    rating: "4.67",
    busiVals: ["family-owned", "lgbtq2s+", "diversity"],
  },
  {
    name: "Plumb Master",
    location: "Ottawa",
    service: "Plumbing",
    storeType: "Local",
    price: "50",
    phoneNumber: "613-555-1234",
    instagram: "@plumbmasterottawa",
    email: "plumbmaster@gmail.com",
    address: "456 Pipe Avenue",
    rating: "4.65",
    busiVals: ["quality", "lgbtq2s+", "diversity", "24/7 service"],
  },
  {
    name: "ProFlow Plumbing",
    location: "Ottawa",
    service: "Plumbing",
    storeType: "Franchise",
    price: "60",
    phoneNumber: "613-888-7777",
    instagram: "@proflowottawa",
    email: "proflow@example.com",
    address: "789 Plumber's Lane",
    rating: "4.32",
    busiVals: ["respect", "lgbtq2s+", "diversity", "emergency service"],
  },
  {
    name: "Local Plumbers Ottawa",
    location: "Ottawa",
    service: "Plumbing",
    storeType: "Local",
    price: "45",
    phoneNumber: "613-999-1111",
    instagram: "@localplumbersottawa",
    email: "localplumbers@example.com",
    address: "222 Drain Street",
    rating: "4.75",
    busiVals: ["family-owned", "lgbtq2s+", "diversity", "eco-friendly"],
  },
  {
    name: "QuickFix Plumbing",
    location: "Ottawa",
    service: "Plumbing",
    storeType: "Local",
    price: "55",
    phoneNumber: "613-123-4567",
    instagram: "@quickfixplumbing",
    email: "quickfix@example.com",
    address: "123 Waterway Road",
    rating: "4.91",
    busiVals: [
      "black-owned",
      "lgbtq2s+",
      "diversity",
      "100% customer satisfaction",
    ],
  },
  {
    name: "Pipes R Us",
    location: "Ottawa",
    service: "Plumbing",
    storeType: "Franchise",
    price: "58",
    phoneNumber: "613-777-5555",
    instagram: "@pipesrusottawa",
    email: "pipesrus@example.com",
    address: "33 Plumber's Place",
    rating: "4.14",
    busiVals: ["quality", "lgbtq2s+", "diversity", "emergency service"],
  },
  {
    name: "Swift Plumbers Ottawa",
    location: "Ottawa",
    service: "Plumbing",
    storeType: "Local",
    price: "52",
    phoneNumber: "613-444-9999",
    instagram: "@swiftplumbersottawa",
    email: "swiftplumbers@example.com",
    address: "777 Drain Street",
    rating: "4.68",
    busiVals: ["family-owned", "lgbtq2s+", "diversity", "eco-friendly"],
  },
  {
    name: "FlowMaster Plumbing",
    location: "Ottawa",
    service: "Plumbing",
    storeType: "Franchise",
    price: "62",
    phoneNumber: "613-333-8888",
    instagram: "@flowmasterottawa",
    email: "flowmaster@example.com",
    address: "456 Pipe Road",
    rating: "4.28",
    busiVals: [
      "black-owned",
      "lgbtq2s+",
      "diversity",
      "100% customer satisfaction",
    ],
  },
  {
    name: "AquaPlumbers Ottawa",
    location: "Ottawa",
    service: "Plumbing",
    storeType: "Local",
    price: "47",
    phoneNumber: "613-222-6666",
    instagram: "@aquaplumbersottawa",
    email: "aquaplumbers@example.com",
    address: "111 Water Street",
    rating: "4.88",
    busiVals: ["quality", "lgbtq2s+", "diversity", "24/7 service"],
  },
  {
    name: "FitLife Personal Trainers",
    location: "Ottawa",
    service: "Personal Trainers",
    storeType: "Local",
    price: "50",
    phoneNumber: "613-555-1234",
    instagram: "@fitlifetrainers",
    email: "fitlife@gmail.com",
    address: "789 Gym Avenue",
    rating: "4.75",
    busiVals: ["quality", "lgbtq2s+", "diversity", "24/7 availability"],
  },
  {
    name: "ProActive Fitness",
    location: "Ottawa",
    service: "Personal Trainers",
    storeType: "Franchise",
    price: "60",
    phoneNumber: "613-888-7777",
    instagram: "@proactiveottawa",
    email: "proactive@example.com",
    address: "456 Wellness Street",
    rating: "4.32",
    busiVals: ["respect", "lgbtq2s+", "diversity", "flexible schedules"],
  },
  {
    name: "LocalFit Trainers Ottawa",
    location: "Ottawa",
    service: "Personal Trainers",
    storeType: "Local",
    price: "45",
    phoneNumber: "613-999-1111",
    instagram: "@localfitottawa",
    email: "localfit@example.com",
    address: "222 Health Lane",
    rating: "4.91",
    busiVals: ["family-owned", "lgbtq2s+", "diversity", "individualized plans"],
  },
  {
    name: "PowerUp Trainers",
    location: "Ottawa",
    service: "Personal Trainers",
    storeType: "Local",
    price: "55",
    phoneNumber: "613-123-4567",
    instagram: "@poweruptrainers",
    email: "powerup@example.com",
    address: "123 Fitness Road",
    rating: "4.68",
    busiVals: ["black-owned", "lgbtq2s+", "diversity", "customer satisfaction"],
  },
  {
    name: "Plates & Palates Personal Chefs",
    location: "Ottawa",
    service: "Personal Chefs",
    storeType: "Local",
    price: "70",
    phoneNumber: "613-777-3333",
    instagram: "@platesandpalates",
    email: "platesandpalates@gmail.com",
    address: "456 Gourmet Street",
    rating: "4.95",
    busiVals: ["quality", "lgbtq2s+", "diversity", "custom menus"],
  },
  {
    name: "Gourmet Cuisine Chefs",
    location: "Ottawa",
    service: "Personal Chefs",
    storeType: "Local",
    price: "75",
    phoneNumber: "613-999-8888",
    instagram: "@gourmetcuisine",
    email: "gourmetcuisine@example.com",
    address: "789 Culinary Lane",
    rating: "4.78",
    busiVals: ["family-owned", "lgbtq2s+", "diversity", "private dining"],
  },
  {
    name: "Savor the Flavor Chefs",
    location: "Ottawa",
    service: "Personal Chefs",
    storeType: "Local",
    price: "65",
    phoneNumber: "613-555-1111",
    instagram: "@savortheflavor",
    email: "savortheflavor@example.com",
    address: "222 Tasty Terrace",
    rating: "4.89",
    busiVals: ["black-owned", "lgbtq2s+", "diversity", "culinary delight"],
  },
  {
    name: "Culinary Creations Chefs",
    location: "Ottawa",
    service: "Personal Chefs",
    storeType: "Franchise",
    price: "80",
    phoneNumber: "613-444-7777",
    instagram: "@culinarycreations",
    email: "culinarycreations@example.com",
    address: "123 Epicurean Road",
    rating: "4.72",
    busiVals: ["quality", "lgbtq2s+", "diversity", "customized cuisine"],
  },
  {
    name: "HockeyPro Trainers",
    location: "Ottawa",
    service: "Hockey Trainers",
    storeType: "Local",
    price: "60",
    phoneNumber: "613-777-9999",
    instagram: "@hockeyproottawa",
    email: "hockeypro@example.com",
    address: "456 Rink Street",
    rating: "4.65",
    busiVals: [
      "quality",
      "hockey enthusiasts",
      "diversity",
      "skill development",
    ],
  },
  {
    name: "IceKings Hockey Academy",
    location: "Ottawa",
    service: "Hockey Trainers",
    storeType: "Local",
    price: "70",
    phoneNumber: "613-888-5555",
    instagram: "@icekingsottawa",
    email: "icekings@example.com",
    address: "789 Ice Arena Lane",
    rating: "4.88",
    busiVals: [
      "family-owned",
      "hockey enthusiasts",
      "diversity",
      "individualized coaching",
    ],
  },
  {
    name: "Frozen Skills Hockey",
    location: "Ottawa",
    service: "Hockey Trainers",
    storeType: "Local",
    price: "65",
    phoneNumber: "613-999-2222",
    instagram: "@frozenskills",
    email: "frozenskills@example.com",
    address: "222 Hockey Blvd",
    rating: "4.76",
    busiVals: [
      "black-owned",
      "hockey enthusiasts",
      "diversity",
      "elite training",
    ],
  },
  {
    name: "LearnRight Tutoring",
    location: "Ottawa",
    service: "Tutoring",
    storeType: "Local",
    price: "40",
    phoneNumber: "613-555-1212",
    instagram: "@learnrightottawa",
    email: "learnright@example.com",
    address: "456 Education Street",
    rating: "4.93",
    busiVals: [
      "quality",
      "education enthusiasts",
      "diversity",
      "individualized learning",
    ],
  },
  {
    name: "MathWiz Tutors",
    location: "Ottawa",
    service: "Tutoring",
    storeType: "Local",
    price: "35",
    phoneNumber: "613-888-9999",
    instagram: "@mathwizottawa",
    email: "mathwiz@example.com",
    address: "789 Learning Lane",
    rating: "4.84",
    busiVals: [
      "family-owned",
      "education enthusiasts",
      "diversity",
      "math expertise",
    ],
  },
  {
    name: "LanguageMasters Tutoring",
    location: "Ottawa",
    service: "Tutoring",
    storeType: "Local",
    price: "45",
    phoneNumber: "613-999-8888",
    instagram: "@languagemastersottawa",
    email: "languagemasters@example.com",
    address: "222 Language Avenue",
    rating: "4.75",
    busiVals: [
      "black-owned",
      "education enthusiasts",
      "diversity",
      "language proficiency",
    ],
  },
];

// Main functional component which renders the home page (/)
export default function Home() {
  // State variables which handles what component should be rendered
  const [isSearch, setIsSearch] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);

  // State variables for the search results and filter
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [storeType, setStoreType] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [values, setValues] = useState("");

  // State variables for specific service results based on the user's actions
  const [serviceResults, setServiceResults] = useState([]);
  const [business, setBusiness] = useState("");

  // Function which handles search queries from the user
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
    if (values) {
      filters.values = values;
    }

    // Use the filters to filter the data
    const filteredData = data.filter((item) => {
      for (const key in filters) {
        if (item[key] !== filters[key]) {
          return false;
        }
      }

      // Apply the price filter if it exists
      if (price && item.price < price) {
        return false;
      }

      // Apply the rating filter if it exists
      if (rating && item.rating < rating) {
        return false;
      }

      return true;
    });

    setServiceResults(filteredData);

    setIsSearch(true);
  };

  // Function which handles the user action of clicking one of the category cards on teh home page
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
  // Function which finds the specific business based on what the user clicked in the results page
  const findBusiness = (name) => {
    data.map((item) => {
      if (item.name == name) {
        setBusiness(item);
      }
    });
  };

  // Renders the HTML for the component
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
            handleSetPrice={setPrice}
            handleSetRating={setRating}
            handleSetValues={setValues}
            price={price}
            rating={rating}
            values={values}
            handleSearch={handleSearch}
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
