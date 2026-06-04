import { useLoaderData } from "react-router-dom";
import Map from "./Map";

const Coverage = () => {
  const districts = useLoaderData();
  console.log(districts)
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-8">
        We are available in 64 districts
      </h2>

     

    {/* map */}
    <Map districts={districts}></Map>
    </div>
  );
};

export default Coverage;