import React from 'react';

export default function Dropdown({ display }) {

  const options = [
    { label: "Sneakers", imgSrc: "./assets/nav/vector.svg" },
    { label: "Sports Shoes", imgSrc: "./assets/nav/vector.svg" },
    { label: "Oxford", imgSrc: "./assets/nav/vector.svg" },
    { label: "Monk", imgSrc: "./assets/nav/vector.svg" },
    { label: "Chelsea", imgSrc: "./assets/nav/vector.svg" },
    { label: "Derby", imgSrc: "./assets/nav/vector.svg" },
    { label: "Loafers", imgSrc: "./assets/nav/vector.svg" },
    { label: "Brogue", imgSrc: "./assets/nav/vector.svg" },
    { label: "Sandals", imgSrc: "./assets/nav/vector.svg" },
  ];

  const toggleSlide = () => display ? "slide-in" : "slide-out";

  return (
    <div className={`dropdown ${toggleSlide()}`}>
      {options.map((option) => (
          <div className="dropdown-option">
            <p>{option.label}</p>
            <img src={option.imgSrc} alt={option.label} />
          </div>
        ))}
    </div>
  );
}

