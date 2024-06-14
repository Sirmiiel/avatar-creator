// src/components/Mouth.js
import React from 'react';
import mouth1 from '../assets/mouth/variant-03.png';
import mouth2 from '../assets/mouth/variant-01.png';
import mouth3 from '../assets/mouth/variant-02.png';
import mouth4 from '../assets/mouth/variant-04.png';
import mouth5 from '../assets/mouth/variant-05.png';
import mouth6 from '../assets/mouth/variant-06.png';
import mouth7 from '../assets/mouth/variant-07.png';
import mouth8 from '../assets/mouth/variant-08.png';
import mouth9 from '../assets/mouth/variant-09.png';
import mouth10 from '../assets/mouth/variant-10.png';
import mouth11 from '../assets/mouth/variant-11.png';
import mouth12 from '../assets/mouth/variant-12.png';
import mouth13 from '../assets/mouth/variant-13.png';
import mouth14 from '../assets/mouth/variant-14.png';
import mouth15 from '../assets/mouth/variant-15.png';
import mouth16 from '../assets/mouth/variant-16.png';
import mouth17 from '../assets/mouth/variant-17.png';
import mouth18 from '../assets/mouth/variant-18.png';
import mouth19 from '../assets/mouth/variant-19.png';
import mouth20 from '../assets/mouth/variant-20.png';
import mouth21 from '../assets/mouth/variant-21.png';
import mouth22 from '../assets/mouth/variant-22.png';
import mouth23 from '../assets/mouth/variant-23.png';
import mouth24 from '../assets/mouth/variant-24.png';
import mouth25 from '../assets/mouth/variant-25.png';
import mouth26 from '../assets/mouth/variant-26.png';
import mouth27 from '../assets/mouth/variant-27.png';
import mouth28 from '../assets/mouth/variant-28.png';
import mouth29 from '../assets/mouth/variant-29.png';
import mouth30 from '../assets/mouth/variant-30.png';

const mouthTypes = {
    mouth1,
    mouth2,
    mouth3,
    mouth4,
    mouth5,
    mouth6,
    mouth7, mouth8, mouth9, mouth10, mouth11, mouth12, mouth13, mouth14, mouth15, mouth16, mouth17, mouth18, mouth19, mouth20, mouth21, mouth22, mouth23, mouth24, mouth25, mouth26,
    mouth27, mouth28, mouth29, mouth30,
};

const Mouth = ({ type }) => {
    if (type === 'none') return null;
  return <img src={mouthTypes[type]} alt={`${type} mouth`} className="mouth" />;
};

export default Mouth;
