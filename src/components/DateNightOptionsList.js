import React from 'react';
import dateNightOptions from '../data/dateNightOptions.json';
import '../styles/style.css'
import { Link } from 'react-router-dom';
const DateNightOption = ({name, location, price, type, rating, image, description}) => {
    return (
        <div className="date-night-option">
            <Link to={`/options/${name}`}>
            <img src={image} alt={name}/>
            </Link>
            <div className="info">
                <h2>{name}</h2>
                <p>{location}</p>
                <p>Price: {price}</p>
                <p>Type: {type}</p>
                <p>Rating: {rating}</p>
                <p>{description}</p>
            </div>
            
        </div>
    )
}

const DateNightOptionsList = () => {
    return (
        <div className="date-night-options-list">
            {dateNightOptions.map((option, index) => {
                return <DateNightOption key={index} {...option} />
            })}
        </div>
    )
}

export default DateNightOptionsList;
