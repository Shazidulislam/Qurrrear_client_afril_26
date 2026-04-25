import {
  FaShippingFast,
  FaMapMarkedAlt,
  FaWarehouse,
  FaMoneyBillWave,
  FaBuilding,
  FaUndo,
} from "react-icons/fa";

const services = [
  {
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in major cities. Express delivery in Dhaka within 4–6 hours.",
    icon: <FaShippingFast size={30} />,
  },
  {
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district within 48–72 hours.",
    icon: <FaMapMarkedAlt size={30} />,
  },
  {
    title: "Fulfillment Solution",
    desc: "Inventory management, order processing, packaging, and after-sales support included.",
    icon: <FaWarehouse size={30} />,
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed product safety.",
    icon: <FaMoneyBillWave size={30} />,
  },
  {
    title: "Corporate Service / Contract",
    desc: "Customized corporate logistics with warehouse and inventory support.",
    icon: <FaBuilding size={30} />,
  },
  {
    title: "Parcel Return",
    desc: "Reverse logistics facility for product returns and exchanges with ease.",
    icon: <FaUndo size={30} />,
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#03464D] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Services
        </h2>

        {/* Sub text */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white px-6 py-10  rounded-xl shadow-lg transition-all duration-300 hover:bg-[#CAEB66] group cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-4 text-[#03464D] ">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl  font-bold text-[#03464D]  mb-2 transition duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-black group-hover:text-[#03464D] text-sm transition duration-300">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;