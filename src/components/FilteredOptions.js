import { React, useLocation, useState, useEffect } from 'react';
import dateNightOptions from '../data/dateNightOptions.json';

const FilteredOptions = () => {
    const { selectedType, selectedLocation } = useLocation().state;
    const [filteredOptions, setFilteredOptions] = useState([]);

    useEffect(() => {
        const filtered = dateNightOptions.filter(
          option =>
            option.type === selectedType && option.location === selectedLocation
        );
        setFilteredOptions(filtered);
    }, [selectedType, selectedLocation]);
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