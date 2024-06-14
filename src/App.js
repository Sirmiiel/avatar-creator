// src/App.js
import React, { useState } from 'react';
import Avatar from './components/Avatar';
import ControlPanel from './components/ControlPanel';
import './App.css';

function App() {
  const [face, setFace] = useState('round');
  const [eyes, setEyes] = useState('eye1');
  const [hair, setHair] = useState('hair1');
  const [eyebrows, setEyebrows] = useState('eyebrows1');
  const [earrings, setEarrings] = useState('none');
  const [mouth, setMouth] = useState('mouth1');

  return (
    <div className="mobile">
      <div className="mobile-text">
        <p>SCREEN NOT WIDE ENOUGH<hr></hr>
        (Your screen width has to be atleast 1024px)</p>
      </div>
      <div className="app-container">
        <ControlPanel 
          setFace={setFace} 
          setEyes={setEyes} 
          setHair={setHair} 
          setEyebrows={setEyebrows} 
          setEarrings={setEarrings} 
          setMouth={setMouth} 
        />
        <div className="avatar">
          <Avatar 
            face={face} 
            eyes={eyes} 
            hair={hair} 
            eyebrows={eyebrows} 
            earrings={earrings} 
            mouth={mouth} 
          />
        </div>
      </div>
    </div>
  );
}


export default App;