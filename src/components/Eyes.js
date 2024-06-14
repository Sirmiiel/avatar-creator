import React from 'react';
import eye1 from '../assets/eyes/variant-03.png';
import eye2 from '../assets/eyes/variant-01.png';
import eye3 from '../assets/eyes/variant-02.png';
import eye4 from '../assets/eyes/variant-04.png';
import eye5 from '../assets/eyes/variant-05.png';
import eye6 from '../assets/eyes/variant-06.png';
import eye7 from '../assets/eyes/variant-07.png';
import eye8 from '../assets/eyes/variant-08.png';
import eye9 from '../assets/eyes/variant-09.png';
import eye10 from '../assets/eyes/variant-10.png';
import eye11 from '../assets/eyes/variant-11.png';
import eye12 from '../assets/eyes/variant-12.png';
import eye13 from '../assets/eyes/variant-13.png';
import eye14 from '../assets/eyes/variant-14.png';
import eye15 from '../assets/eyes/variant-15.png';
import eye16 from '../assets/eyes/variant-16.png';
import eye17 from '../assets/eyes/variant-17.png';
import eye18 from '../assets/eyes/variant-18.png';
import eye19 from '../assets/eyes/variant-19.png';
import eye20 from '../assets/eyes/variant-20.png';
import eye21 from '../assets/eyes/variant-21.png';
import eye22 from '../assets/eyes/variant-22.png';
import eye23 from '../assets/eyes/variant-23.png';
import eye24 from '../assets/eyes/variant-24.png';
import eye25 from '../assets/eyes/variant-25.png';
import eye26 from '../assets/eyes/variant-26.png';

const eyeTypes = {
  eye1,
  eye2,
  eye3,
  eye4,
  eye5,
  eye6,
  eye7, eye8, eye9, eye10, eye11, eye12, eye13, eye14, eye15, eye16, eye17, eye18, eye19, eye20, eye21, eye22, eye23, eye24, eye25, eye26,
};

const Eyes = ({ type }) => {
  return <img src={eyeTypes[type]} alt={`${type} eyes`} className="eyes" />;
};

export default Eyes;
