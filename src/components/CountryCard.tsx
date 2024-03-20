// components/CountryCard.tsx

import React, { useState } from 'react';
import styles from './CountryCards.module.css'

interface CountryCardProps {
  countryName: string;
  flagUrl: string;
  backgroundColor: string;
  population: number;
  longitude: number;
  latitude: number;
}

const CountryCard: React.FC<CountryCardProps> = ({ countryName, flagUrl, backgroundColor, population, longitude, latitude }) => {
  const [showBack, setShowBack] = useState(false);

  const handleClick = () => {
    setShowBack(!showBack);
  };

  return (
    <div className={styles['country-card']} style={{ backgroundColor }} onClick={handleClick}>
      {showBack ? (
        <div className="back">
          <h2>{countryName}</h2>
          <p>Population: {population}</p>
          <p>Longitude: {longitude}</p>
          <p>Latitude: {latitude}</p>
        </div>
      ) : (
        <div className={styles.front}>
          <img className={styles.flag} src={flagUrl} alt={`Flag of ${countryName}`} />
          <h2>{countryName}</h2>
        </div>
      )}
    </div>
  );
};

export default CountryCard;
