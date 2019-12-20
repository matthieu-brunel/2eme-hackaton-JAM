import React from 'react';
import "./Scene4.css";
import CompScene4 from './compScene4'
import Louis from "./Louis";
import Armand from "./Armand";
import Matcoco from "./Matcoco";


function Scene4() {
  return (
    <div className="backScene4">
      <CompScene4 />

      <div className="row matloar">
        <div className="loui">
          <Louis />
        </div>
        <div className="arman">
          <Armand />
        </div>
        <div className="matcoc">
          <Matcoco />
        </div>
      </div>
    </div>
  );
}

export default Scene4 