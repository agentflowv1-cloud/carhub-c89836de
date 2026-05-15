import React, { useState } from 'react';
import './CarCard.css';

interface Car {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`car-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={car.image} alt={car.name} />
      <h2>{car.name}</h2>
      <p>{car.description}</p>
    </div>
  );
};

export default CarCard;