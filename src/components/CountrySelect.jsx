import React, { useState, useEffect, useRef } from 'react';
import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';

// Register English language for country names
countries.registerLocale(en);

const CountrySelect = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Select a country');
  const dropdownRef = useRef(null);

  // Get list of country names
  const countryList = Object.values(countries.getNames('en', { select: 'official' }));

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    if (onSelect) {
      onSelect(country);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full relative" ref={dropdownRef}>
      <div
        className="bg-transparent p-3 rounded-lg border border-gray-300 focus:outline-none cursor-pointer flex items-center justify-between"
        onClick={toggleDropdown}
      >
        <span className="text-gray-700">{selectedCountry}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
      {isOpen && (
        <div className="absolute w-full bottom-full mb-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
          {countryList.map((country, index) => (
            <div
              key={index}
              className="px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => selectCountry(country)}
            >
              {country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelect;