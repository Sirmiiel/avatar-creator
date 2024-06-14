// src/components/Earrings.js
import React from 'react';
import earrings1 from '../assets/earrings/variant-01.png';
import earrings2 from '../assets/earrings/variant-02.png';
import earrings3 from '../assets/earrings/variant-03.png';
import earrings4 from '../assets/earrings/variant-04.png';
import earrings5 from '../assets/earrings/variant-05.png';
import earrings6 from '../assets/earrings/variant-06.png';

const earringTypes = {
  none: null,
  earrings1,
earrings2, earrings3, earrings4, earrings5, earrings6,
};

const Earrings = ({ type }) => {
    if (type === 'none') return null;
    return <img src={earringTypes[type]} alt={`${type} earrings`} className="earrings" />;
};

export default Earrings;
