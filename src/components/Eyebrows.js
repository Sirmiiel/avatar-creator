// src/components/Eyebrows.js
import React from 'react';
import eyebrows1 from '../assets/eyebrows/variant-01.png';
import eyebrows2 from '../assets/eyebrows/variant-02.png';
import eyebrows3 from '../assets/eyebrows/variant-03.png';
import eyebrows4 from '../assets/eyebrows/variant-04.png';
import eyebrows5 from '../assets/eyebrows/variant-05.png';
import eyebrows6 from '../assets/eyebrows/variant-06.png';
import eyebrows7 from '../assets/eyebrows/variant-07.png';
import eyebrows8 from '../assets/eyebrows/variant-08.png';
import eyebrows9 from '../assets/eyebrows/variant-09.png';
import eyebrows10 from '../assets/eyebrows/variant-10.png';
import eyebrows11 from '../assets/eyebrows/variant-11.png';
import eyebrows12 from '../assets/eyebrows/variant-12.png';
import eyebrows13 from '../assets/eyebrows/variant-13.png';
import eyebrows14 from '../assets/eyebrows/variant-14.png';
import eyebrows15 from '../assets/eyebrows/variant-15.png';

const eyebrowTypes = {
  eyebrows1,
  eyebrows2, eyebrows3, eyebrows4, eyebrows5, eyebrows6, eyebrows7, eyebrows8, eyebrows9, eyebrows10,
  eyebrows11, eyebrows12, eyebrows13, eyebrows14, eyebrows15,  
};

const Eyebrows = ({ type }) => {
  return <img src={eyebrowTypes[type]} alt={`${type} eyebrows`} className="eyebrows" />;
};

export default Eyebrows;
