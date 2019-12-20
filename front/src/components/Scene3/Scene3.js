import React from 'react';
import "./Scene3.css";
import CompScene3 from './compScene3';
import Xavier from './Xavier';
import NicolasF from './NicolasF'


function Scene3() {
  return (
    <div className="backScene3">
      <CompScene3 />

      <div className="row xavnico">
       <div className="xavie">
        <Xavier />
       </div>
       <div className="nicol">
        <NicolasF />
        </div>
      </div>


    </div>
  );
}

export default Scene3; 