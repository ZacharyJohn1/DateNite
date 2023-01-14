import React from "react";
import "../styles/style.css";
import dateNightOptions from "../data/dateNightOptions.json";
import { useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const options = dateNightOptions.map((option, index) => (
    <option key={index}>{option.type}</option>
  ));
  const locationOptions = dateNightOptions.map((option, index) => (
    <option key={index}>{option.location}</option>
  ));
  return (
    <div className="home">
      <h1>Welcome to DateNite</h1>
      <p className="find">Find Your Perfect Date</p>
      <select onChange={(e) => setSelectedType(e.target.value)}>
        {options}
      </select>
      in
      <select onChange={(e) => setSelectedLocation(e.target.value)}>
        {locationOptions}
      </select>
      <Link
  to={{
    pathname: "/filtered-options",
    state: { selectedType, selectedLocation }
  }}
>
  <button>Search</button>
</Link>
    </div>
  );
}
export default Home;
