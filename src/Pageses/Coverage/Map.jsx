import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

const Map = ({ districts }) => {
  const [searchText, setSearchText] = useState("");
  const [selecteDistrict, setSelecteDistrict] = useState(null);

  console.log(searchText)
  console.log(selecteDistrict)

  const handleSearch = () => {
    const foundDistrict = districts.find((district) =>
      district.district
        ?.toLowerCase()
        ?.includes(searchText.toLocaleLowerCase()),
    );
    if (foundDistrict) {
      setSelecteDistrict(foundDistrict);
    } else {
      alert("Location not found");
    }
  };

  function FlyToDistrict({ district }) {
  const map = useMap();

  useEffect(() => {
    if (!district) return;

    map.flyTo(
      [district.latitude, district.longitude],
      12,
      {
        duration: 2,
      }
    );
  }, [district, map]);

  return null;
}

  return (
    <div>
      {/* Search Box */}
      <div className="flex justify-center mb-10">
        <div className="flex w-full max-w-xl">
          <input
            type="text"
            placeholder="Search district..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input outline-none border-r-0 w-full"
          />

          <button
          onClick={handleSearch}
            className="px-6 font-semibold rounded-r-lg"
            style={{
              backgroundColor: "#CAEB66",
              color: "black",
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Map */}
      <div className="h-[500px] sm:w-[600px] mx-auto rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FlyToDistrict district={selecteDistrict} />

          {districts.map((district, index) => (
            <Marker
              key={index}
              position={[district.latitude, district.longitude]}
            >
              <Popup>
                <div>
                  <h3 className="font-bold text-lg">{district.district}</h3>

                  <p>Region: {district.region}</p>

                  <p>Status: {district.status}</p>

                  <p className="mt-2">Covered Areas:</p>

                  <ul>
                    {district.covered_area.map((area, idx) => (
                      <li key={idx}>• {area}</li>
                    ))}
                  </ul>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
