/* eslint-disable linebreak-style */import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1997-06-21T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Kamloops, Canada',
  },
  {
    key: 'native_place',
    label: 'Native Place',
    value: 'Osaka, Japan',
  },
  {
    key: 'growth_env',
    label: 'Growth Environment',
    value: 'Berlin, Germen',
  },
];

export default data;
