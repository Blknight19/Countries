// pages/index.tsx
'use client'
import styles from './page.module.css';
// pages/index.tsx

import React from 'react';
import CountryCard from '../../components/CountryCard';

const countries = [
  { 
    name: 'Germany', 
    flagUrl: '/flags/germany.png', 
    backgroundColor: 'orange', 
    population: 83000000, 
    longitude: 10.4515, 
    latitude: 51.1657 
  },
  // { 
  //   name: 'France', 
  //   flagUrl: '/flags/france.png', 
  //   backgroundColor: '#e0e0e0', 
  //   population: 67000000, 
  //   longitude: 2.3522, 
  //   latitude: 48.8566 
  // },
  // Add more countries as needed
];


const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Country Cards</h1>
      <div className={styles['.country-card-container']}>
        {countries.map((country, index) => (
          <CountryCard
            key={index}
            countryName={country.name}
            flagUrl={country.flagUrl}
            backgroundColor={country.backgroundColor}
            population={country.population}
            longitude={country.longitude}
            latitude={country.latitude}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
