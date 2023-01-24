import { React, useState, useEffect } from 'react';
import dateNightOptions from '../data/dateNightOptions.json';
import { useLocation } from 'react-router-dom'

const FilteredOptions = () => {
    const location = useLocation();
    
    const [filteredOptions, setFilteredOptions] = useState([]);
    const { selectedType, selectedLocation } = location.state;
    useEffect(() => {
        const filtered = dateNightOptions.filter(
          option =>
            option.type === selectedType && option.location === selectedLocation
        );
        setFilteredOptions(filtered);
    }, [selectedType, selectedLocation]);
    console.log(filteredOptions)
    return (
        <div>
            {filteredOptions.map((option, index) => (
                <div key={index}>
                    <h2>{option.name}</h2>
                    <p>{option.description}</p>
                    <img src={option.image} alt={option.name} />
                </div>
            ))}
        </div>
    );
};


export default FilteredOptions