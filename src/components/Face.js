import React from 'react';
import round from '../assets/face.png';
import oval from '../assets/face.png';
import square from '../assets/face.png';

const faceTypes = {
  round,
  oval,
  square,
};

const Face = ({ type }) => {
    if (type === 'none') return null;
  return <img src={faceTypes[type]} alt={`${type} face`} className="face" />;
};

export default Face;


