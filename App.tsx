import React from 'react';
import './App.css';
import CarCard from './CarCard';

interface Car {
  id: number;
  name: string;
  description: string;
  image: string;
}

const cars: Car[] = [
  { id: 1, name: 'Car 1', description: 'This is car 1', image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Car 2', description: 'This is car 2', image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Car 3', description: 'This is car 3', image: 'https://via.placeholder.com/300' },
];

const App: React.FC = () => {
  return (
    <div className='app'>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default App;