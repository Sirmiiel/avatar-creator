// src/components/Avatar.js
import React from 'react';
import Face from './Face';
import Eyes from './Eyes';
import Hair from './Hair';
import Eyebrows from './Eyebrows';
import Earrings from './Earrings';
import Mouth from './Mouth';
import './Avatar.css';

const Avatar = ({ face, eyes, hair, eyebrows, earrings, mouth }) => {
  return (
    <div className="avatar">
      <Face type={face} />
      <Eyes type={eyes} />
      <Hair type={hair} />
      <Eyebrows type={eyebrows} />
      <Earrings type={earrings} />
      <Mouth type={mouth} />
    </div>
  );
};

export default Avatar;
