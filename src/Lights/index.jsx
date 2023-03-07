import React from 'react'
import './style.css';
import Light from '../Light';

const Lights = ({ lights }) => {
  
  return (
    <div className="lights">
      {lights.map((light) => (
        <Light
          name={light.name}
          state={light.state === "on" ? true : false}
        />
      ))}

    </div>
  );
};


export default Lights;
