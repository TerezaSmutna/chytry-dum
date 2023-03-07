import React, { useState } from 'react';
import './style.css';
import lightOff from './img/light-off.svg';
import lightOn from './img/light-on.svg';


const Light = ({ name, state }) => {
  const [zapnuto, setZapnuto] = useState(state)

  return (
    <div className="light" onClick={() => setZapnuto(!zapnuto)}>
      <div className="light__icon">
        <img src={zapnuto ? lightOn : lightOff} />
      </div>
      <div className="light__name">
        {name}
      </div>
    </div>
  );
};


export default Light;
