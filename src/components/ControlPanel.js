// src/components/ControlPanel.js
import React, { useState } from 'react';
import face from '../assets/face.png';
import hair from '../assets/hair/long-01.png';
import eyes from '../assets/eyes/variant-01.png'; import eye1 from '../assets/eyes/variant-03.png'; import eye2 from '../assets/eyes/variant-01.png';import eye3 from '../assets/eyes/variant-02.png';import eye4 from '../assets/eyes/variant-04.png';
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
import earrings from '../assets/earrings/variant-02.png';
import eyebrows from '../assets/eyebrows/variant-01.png';
import mouth from '../assets/mouth/variant-01.png';

const ControlPanel = ({ setFace, setEyes, setHair, setEyebrows, setEarrings, setMouth }) => {
  const [activeTab, setActiveTab] = useState('face');

  const [selectedFace, setSelectedFace] = useState('none');
  const [selectedEyes, setSelectedEyes] = useState('none');
  const [selectedHair, setSelectedHair] = useState('none');
  const [selectedEyebrows, setSelectedEyebrows] = useState('none');
  const [selectedEarrings, setSelectedEarrings] = useState('none');
  const [selectedMouth, setSelectedMouth] = useState('none');

  const handleSelection = (setSelection, selection, callback) => {
    setSelection(selection);
    callback(selection);
  };

  return (
    <div className="control-panel-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'face' ? 'active' : ''}`}
          onClick={() => setActiveTab('face')}
        >
          
            <img src={ face } alt='' />
            
          
        </div>
        <div
          className={`tab ${activeTab === 'eyes' ? 'active' : ''}`}
          onClick={() => setActiveTab('eyes')}
        >
            
          <img src={ eyes } alt='' />
        </div>
        <div
          className={`tab ${activeTab === 'hair' ? 'active' : ''}`}
          onClick={() => setActiveTab('hair')}
        >
            
          <img src={ hair } alt='' />
        </div>
        <div
          className={`tab ${activeTab === 'eyebrows' ? 'active' : ''}`}
          onClick={() => setActiveTab('eyebrows')}
        >
            
          <img src={ eyebrows } alt='' />
        </div>
        <div
          className={`tab ${activeTab === 'earrings' ? 'active' : ''}`}
          onClick={() => setActiveTab('earrings')}
        >
            
          <img src={ earrings } alt='' />
        </div>
        <div
          className={`tab ${activeTab === 'mouth' ? 'active' : ''}`}
          onClick={() => setActiveTab('mouth')}
        >
        
          <img src={ mouth } alt='' />
        </div>
      </div>


      <div className={`tab-content ${activeTab === 'face' ? 'active' : ''}`}>
        <div className="control-panel-section">
         
          <button
            className={selectedFace === 'oval' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedFace, 'oval', setFace)}
          >
            <img src='./assets/face.png' />
          </button>
        </div>
      </div>



    
      <div className={`tab-content ${activeTab === 'eyes' ? 'active' : ''}`}>
        <div className="control-panel-section">
          <button
            className={selectedEyes === 'eye1' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye1', setEyes)}
          >
            <img src={ eye1 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye2' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye2', setEyes)}
          >
            <img src={ eye2 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye3' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye3', setEyes)}
          >
            <img src={ eye3 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye4' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye4', setEyes)}
          >
            <img src={ eye4 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye5' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye5', setEyes)}
          >
            <img src={ eye5 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye6' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye6', setEyes)}
          >
            <img src={ eye6 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye7' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye7', setEyes)}
          >
            <img src={ eye7 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye8' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye8', setEyes)}
          >
            <img src={ eye8 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye9' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye9', setEyes)}
          >
            <img src={ eye9 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye10' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye10', setEyes)}
          >
            <img src={ eye10 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye11' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye11', setEyes)}
          >
            <img src={ eye11 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye12' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye12', setEyes)}
          >
            <img src={ eye12 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye13' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye13', setEyes)}
          >
            <img src={ eye13 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye14' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye14', setEyes)}
          >
            <img src={ eye14 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye15' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye15', setEyes)}
          >
            <img src={ eye15 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye16' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye16', setEyes)}
          >
            <img src={ eye16 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye17' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye17', setEyes)}
          >
            <img src={ eye17 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye18' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye18', setEyes)}
          >
            <img src={ eye18 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye19' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye19', setEyes)}
          >
            <img src={ eye19 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye20' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye20', setEyes)}
          >
            <img src={ eye20 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye21' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye21', setEyes)}
          >
            <img src={ eye21 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye22' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye22', setEyes)}
          >
            <img src={ eye22 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye23' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye23', setEyes)}
          >
            <img src={ eye23 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye24' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye24', setEyes)}
          >
            <img src={ eye24 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye25' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye25', setEyes)}
          >
            <img src={ eye25 } alt='' />
          </button>
          <button
            className={selectedEyes === 'eye26' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyes, 'eye26', setEyes)}
          >
            <img src={ eye26 } alt='' />
          </button>
        </div>
      </div>



      <div className={`tab-content ${activeTab === 'hair' ? 'active' : ''}`}>
        <div className="control-panel-section">
          
          <button
            className={selectedHair === 'hair1' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair1', setHair)}
          >
            <img src='./assets/hair/long-01.png' />
          </button>
          <button
            className={selectedHair === 'hair2' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair2', setHair)}
          >
            <img src='./assets/hair/long-02.png' />
          </button>
          <button
            className={selectedHair === 'hair3' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair3', setHair)}
          >
            <img src='./assets/hair/long-03.png' />
          </button>
          <button
            className={selectedHair === 'hair4' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair4', setHair)}
          >
            <img src='./assets/hair/long-04.png' />
          </button>
          <button
            className={selectedHair === 'hair5' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair5', setHair)}
          >
            <img src='./assets/hair/long-05.png' />
          </button>
          <button
            className={selectedHair === 'hair6' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair6', setHair)}
          >
            <img src='./assets/hair/long-06.png' />
          </button>
          <button
            className={selectedHair === 'hair7' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair7', setHair)}
          >
            <img src='./assets/hair/long-07.png' />
          </button>
          <button
            className={selectedHair === 'hair8' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair8', setHair)}
          >
            <img src='./assets/hair/long-08.png' />
          </button>
          <button
            className={selectedHair === 'hair9' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair9', setHair)}
          >
            <img src='./assets/hair/long-09.png' />
          </button>
          <button
            className={selectedHair === 'hair10' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair10', setHair)}
          >
            <img src='./assets/hair/long-10.png' />
          </button>
          <button
            className={selectedHair === 'hair11' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair11', setHair)}
          >
            <img src='./assets/hair/long-11.png' />
          </button>
          <button
            className={selectedHair === 'hair12' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair12', setHair)}
          >
            <img src='./assets/hair/long-12.png' />
          </button>
          <button
            className={selectedHair === 'hair13' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair13', setHair)}
          >
            <img src='./assets/hair/long-13.png' />
          </button>
          <button
            className={selectedHair === 'hair14' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair14', setHair)}
          >
            <img src='./assets/hair/long-14.png' />
          </button>
          <button
            className={selectedHair === 'hair15' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair15', setHair)}
          >
            <img src='./assets/hair/long-15.png' />
          </button>
          <button
            className={selectedHair === 'hair16' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair16', setHair)}
          >
            <img src='./assets/hair/long-16.png' />
          </button>
          <button
            className={selectedHair === 'hair16' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair16', setHair)}
          >
            <img src='./assets/hair/long-16.png' />
          </button>
          <button
            className={selectedHair === 'hair17' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair17', setHair)}
          >
            <img src='./assets/hair/long-17.png' />
          </button>
          <button
            className={selectedHair === 'hair18' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair18', setHair)}
          >
            <img src='./assets/hair/long-18.png' />
          </button>
          <button
            className={selectedHair === 'hair19' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair19', setHair)}
          >
            <img src='./assets/hair/long-19.png' />
          </button>
          <button
            className={selectedHair === 'hair20' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair20', setHair)}
          >
            <img src='./assets/hair/long-20.png' />
          </button>
          <button
            className={selectedHair === 'hair21' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair21', setHair)}
          >
            <img src='./assets/hair/long-21.png' />
          </button>
          <button
            className={selectedHair === 'hair22' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair22', setHair)}
          >
            <img src='./assets/hair/long-22.png' />
          </button>
          <button
            className={selectedHair === 'hair23' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair23', setHair)}
          >
            <img src='./assets/hair/long-23.png' />
          </button>
          <button
            className={selectedHair === 'hair24' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair24', setHair)}
          >
            <img src='./assets/hair/long-24.png' />
          </button>
          <button
            className={selectedHair === 'hair25' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair25', setHair)}
          >
            <img src='./assets/hair/long-25.png' />
          </button>
          <button
            className={selectedHair === 'hair26' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair26', setHair)}
          >
            <img src='./assets/hair/long-26.png' />
          </button>

          <button
            className={selectedHair === 'hair27' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair27', setHair)}
          >
            <img src='./assets/hair/short-01.png' />
          </button>
          <button
            className={selectedHair === 'hair28' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair28', setHair)}
          >
            <img src='./assets/hair/short-02.png' />
          </button>
          <button
            className={selectedHair === 'hair29' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair29', setHair)}
          >
            <img src='./assets/hair/short-03.png' />
          </button>
          <button
            className={selectedHair === 'hair30' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair30', setHair)}
          >
            <img src='./assets/hair/short-04.png' />
          </button>
          <button
            className={selectedHair === 'hair31' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair31', setHair)}
          >
            <img src='./assets/hair/short-05.png' />
          </button>
          <button
            className={selectedHair === 'hair32' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair32', setHair)}
          >
            <img src='./assets/hair/short-06.png' />
          </button>
          <button
            className={selectedHair === 'hair33' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair33', setHair)}
          >
            <img src='./assets/hair/short-07.png' />
          </button>
          <button
            className={selectedHair === 'hair34' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair34', setHair)}
          >
            <img src='./assets/hair/short-08.png' />
          </button>
          <button
            className={selectedHair === 'hair35' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair35', setHair)}
          >
            <img src='./assets/hair/short-09.png' />
          </button>
          <button
            className={selectedHair === 'hair36' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair36', setHair)}
          >
            <img src='./assets/hair/short-10.png' />
          </button>
          <button
            className={selectedHair === 'hair37' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair37', setHair)}
          >
            <img src='./assets/hair/short-11.png' />
          </button>
          <button
            className={selectedHair === 'hair38' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair38', setHair)}
          >
            <img src='./assets/hair/short-12.png' />
          </button>
          <button
            className={selectedHair === 'hair39' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair39', setHair)}
          >
            <img src='./assets/hair/short-13.png' />
          </button>
          <button
            className={selectedHair === 'hair40' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair40', setHair)}
          >
            <img src='./assets/hair/short-14.png' />
          </button>
          <button
            className={selectedHair === 'hair41' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair41', setHair)}
          >
            <img src='./assets/hair/short-15.png' />
          </button>
          <button
            className={selectedHair === 'hair42' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair42', setHair)}
          >
            <img src='./assets/hair/short-16.png' />
          </button>
          <button
            className={selectedHair === 'hair43' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair43', setHair)}
          >
            <img src='./assets/hair/short-17.png' />
          </button>
          <button
            className={selectedHair === 'hair44' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair44', setHair)}
          >
            <img src='./assets/hair/short-18.png' />
          </button>
          <button
            className={selectedHair === 'hair45' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'hair45', setHair)}
          >
            <img src='./assets/hair/short-19.png' />
          </button>


          <button
            className={selectedHair === 'none' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedHair, 'none', setHair)}
          >
            
          </button>
        </div>
      </div>




      <div className={`tab-content ${activeTab === 'eyebrows' ? 'active' : ''}`}>
        <div className="control-panel-section">
          
          <button
            className={selectedEyebrows === 'eyebrows1' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyebrows, 'eyebrows1', setEyebrows)}
          >
            <img src='./assets/eyebrows/variant-01.png' />
          </button>

          <button
            className={selectedEyebrows === 'eyebrows2' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyebrows, 'eyebrows2', setEyebrows)}
          >
            <img src='./assets/eyebrows/variant-02.png' />
          </button>

          <button
            className={selectedEyebrows === 'eyebrows3' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyebrows, 'eyebrows3', setEyebrows)}
          >
            <img src='./assets/eyebrows/variant-03.png' />
          </button>

          <button
            className={selectedEyebrows === 'eyebrows4' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyebrows, 'eyebrows4', setEyebrows)}
          >
            <img src='./assets/eyebrows/variant-04.png' />
          </button>

          <button
            className={selectedEyebrows === 'eyebrows5' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyebrows, 'eyebrows5', setEyebrows)}
          >
            <img src='./assets/eyebrows/variant-05.png' />
          </button>

          <button
            className={selectedEyebrows === 'eyebrows6' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyebrows, 'eyebrows6', setEyebrows)}
          >
            <img src='./assets/eyebrows/variant-06.png' />
          </button>

          <button
            className={selectedEyebrows === 'eyebrows7' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyebrows, 'eyebrows7', setEyebrows)}
          >
            <img src='./assets/eyebrows/variant-07.png' />
          </button>

          <button
            className={selectedEyebrows === 'eyebrows8' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyebrows, 'eyebrows8', setEyebrows)}
          >
            <img src='./assets/eyebrows/variant-08.png' />
          </button>

          <button
            className={selectedEyebrows === 'eyebrows9' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyebrows, 'eyebrows9', setEyebrows)}
          >
            <img src='./assets/eyebrows/variant-09.png' />
          </button>
          <button
            className={selectedEyebrows === 'eyebrows10' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyebrows, 'eyebrows10', setEyebrows)}
          >
            <img src='./assets/eyebrows/variant-10.png' />
          </button>
          <button
            className={selectedEyebrows === 'eyebrow11' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyebrows, 'eyebrows11', setEyebrows)}
          >
            <img src='./assets/eyebrows/variant-11.png' />
          </button>
          <button
            className={selectedEyebrows === 'eyebrows12' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyebrows, 'eyebrows12', setEyebrows)}
          >
            <img src='./assets/eyebrows/variant-12.png' />
          </button>
          <button
            className={selectedEyebrows === 'eyebrows13' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyebrows, 'eyebrows13', setEyebrows)}
          >
            <img src='./assets/eyebrows/variant-13.png' />
          </button>
          <button
            className={selectedEyebrows === 'eyebrow14' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEyebrows, 'eyebrows14', setEyebrows)}
          >
            <img src='./assets/eyebrows/variant-14.png' />
          </button>


        </div>
      </div>




      <div className={`tab-content ${activeTab === 'earrings' ? 'active' : ''}`}>
        <div className="control-panel-section">
          <button
            className={selectedEarrings === 'none' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEarrings, 'none', setEarrings)}
          >
            None
          </button>
          <button
            className={selectedEarrings === 'earrings1' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEarrings, 'earrings1', setEarrings)}
          >
            <img src='./assets/earrings/variant-01.png' />
          </button>
          <button
            className={selectedEarrings === 'earrings2' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEarrings, 'earrings2', setEarrings)}
          >
            <img src='./assets/earrings/variant-02.png' />
          </button>
          <button
            className={selectedEarrings === 'earrings3' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEarrings, 'earrings3', setEarrings)}
          >
            <img src='./assets/earrings/variant-03.png' />
          </button>
          <button
            className={selectedEarrings === 'earrings4' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEarrings, 'earrings4', setEarrings)}
          >
            <img src='./assets/earrings/variant-04.png' />
          </button>
          <button
            className={selectedEarrings === 'earrings5' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEarrings, 'earrings5', setEarrings)}
          >
            <img src='./assets/earrings/variant-05.png' />
          </button>
          <button
            className={selectedEarrings === 'earrings6' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedEarrings, 'earrings6', setEarrings)}
          >
            <img src='./assets/earrings/variant-06.png' />
          </button>
        </div>
      </div>




      <div className={`tab-content ${activeTab === 'mouth' ? 'active' : ''}`}>
        <div className="control-panel-section">
          <button
            className={selectedMouth === 'none' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedMouth, 'none', setMouth)}
          >
            None
          </button>
          <button
            className={selectedMouth === 'mouth1' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedMouth, 'mouth1', setMouth)}
          >
            <img src='./assets/mouth/variant-01.png' />
          </button>
          <button
            className={selectedMouth === 'mouth2' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedMouth, 'mouth2', setMouth)}
          >
            <img src='./assets/mouth/variant-02.png' />
          </button>
          <button
            className={selectedMouth === 'mouth3' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedMouth, 'mouth3', setMouth)}
          >
            <img src='./assets/mouth/variant-03.png' />
          </button>
          <button
            className={selectedMouth === 'mouth4' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedMouth, 'mouth4', setMouth)}
          >
            <img src='./assets/mouth/variant-04.png' />
          </button>
          <button
            className={selectedMouth === 'mouth5' ? 'active' : ''}
            onClick={() => handleSelection(setSelectedMouth, 'mouth5', setMouth)}
          >
            <img src='./assets/mouth/variant-05.png' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
