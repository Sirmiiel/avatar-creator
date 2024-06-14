import React from 'react';
import hair1 from '../assets/hair/long-01.png';
import hair2 from '../assets/hair/long-02.png';
import hair3 from '../assets/hair/long-03.png';
import hair4 from '../assets/hair/long-04.png';
import hair5 from '../assets/hair/long-05.png';
import hair6 from '../assets/hair/long-06.png';
import hair7 from '../assets/hair/long-07.png';
import hair8 from '../assets/hair/long-08.png';
import hair9 from '../assets/hair/long-09.png';
import hair10 from '../assets/hair/long-10.png';
import hair11 from '../assets/hair/long-11.png';
import hair12 from '../assets/hair/long-12.png';
import hair13 from '../assets/hair/long-13.png';
import hair14 from '../assets/hair/long-14.png';
import hair15 from '../assets/hair/long-15.png';
import hair16 from '../assets/hair/long-16.png';
import hair17 from '../assets/hair/long-17.png';
import hair18 from '../assets/hair/long-18.png';
import hair19 from '../assets/hair/long-19.png';
import hair20 from '../assets/hair/long-20.png';
import hair21 from '../assets/hair/long-21.png';
import hair22 from '../assets/hair/long-22.png';
import hair23 from '../assets/hair/long-23.png';
import hair24 from '../assets/hair/long-24.png';
import hair25 from '../assets/hair/long-25.png';
import hair26 from '../assets/hair/long-26.png';

import hair27 from '../assets/hair/short-01.png';
import hair28 from '../assets/hair/short-02.png';
import hair29 from '../assets/hair/short-03.png';
import hair30 from '../assets/hair/short-04.png';
import hair31 from '../assets/hair/short-05.png';
import hair32 from '../assets/hair/short-06.png';
import hair33 from '../assets/hair/short-07.png';
import hair34 from '../assets/hair/short-08.png';
import hair35 from '../assets/hair/short-09.png';
import hair36 from '../assets/hair/short-10.png';
import hair37 from '../assets/hair/short-11.png';
import hair38 from '../assets/hair/short-12.png';
import hair39 from '../assets/hair/short-13.png';
import hair40 from '../assets/hair/short-14.png';
import hair41 from '../assets/hair/short-15.png';
import hair42 from '../assets/hair/short-16.png';
import hair43 from '../assets/hair/short-17.png';
import hair44 from '../assets/hair/short-18.png';
import hair45 from '../assets/hair/short-19.png';

const hairTypes = {
  none: null,
  hair1, hair2, hair3, hair4, hair5, hair6, hair7, hair8, hair9, hair10, hair11, hair12,
  hair13,hair14, hair15, hair16, hair17, hair18, hair19, hair20, hair21, hair22, hair23, hair24, hair25,
  hair26, hair27, hair28, hair29, hair30, hair31, hair32, hair33, hair34, hair35, hair36, hair37,
  hair38,hair39, hair40, hair41, hair42, hair43, hair44, hair45, 
};

const Hair = ({ type }) => {
    if (type === 'none') return null;
    return <img src={hairTypes[type]} alt={`${type} hair`} className="hair" />;
};

export default Hair;
