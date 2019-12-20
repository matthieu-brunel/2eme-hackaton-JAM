import React from 'react';
import "./Scene5.css";
import CompScene5 from './compScene5';
import NicolasL from './NicolasL';
import Virginy from './Virginy';
import Paul from './Paul';
import FabienF from './FabienF';
import Jonathan from './Jonathan';
import "./../Gridd.css";


function Scene5() {
  return (
    <div className="backScene5 ">
      <CompScene5 />

      <div className="row vinijopofa">
        <div className="virgi">
          <Virginy />
        </div>
        <div className="nico">
          <NicolasL />
        </div>
        <div className="jonat">
          <Jonathan />
        </div>
        <div className="poul">
          <Paul />
        </div>
        <div className="fabinou">
          <FabienF />
        </div>
        
      </div>
    </div>
  );
}

export default Scene5 