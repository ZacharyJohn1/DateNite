import React from "react";
import "../styles/style.css";
import dateNightOptions from "../data/dateNightOptions.json";

function Home() {
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
      <select>{options}</select>in<select>{locationOptions}</select>
      <button>Search</button>
    </div>
  );
}
export default Home;
