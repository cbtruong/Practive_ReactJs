import React, {useState, useEffect} from 'react';
import { FaCopy } from "react-icons/fa";
import './Test.css';

function Test () {
  return (
   <div className="test">
    <div className="test-wrapper">
      <div className="test-result-wrapper">
        <input type="text-result" min={6} />
        <FaCopy />
      </div>
    </div>
   </div>
  );
}

export default Test;
