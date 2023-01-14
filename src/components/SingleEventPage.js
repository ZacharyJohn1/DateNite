import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import dateNightOptions from "../data/dateNightOptions.json";

function SingleEventPage() {
    const { optionName } = useParams();
const optionNameDecoded = decodeURIComponent(optionName);
const option = dateNightOptions.find(opt => opt.name === optionNameDecoded);
if(!option){
    return <h2>Option not found</h2>
  }
  return (
      <div>
          <h2>{option.name}</h2>
          <p>{option.location}</p>
          <p>{option.price}</p>
          <p>{option.type}</p>
          <p>{option.rating}</p>
          <img src={option.image} alt={option.name} />
          <p>{option.description}</p>
          <Link to="/all-dates">Back to options</Link>
      </div>
  );
  
};

export default SingleEventPage;
