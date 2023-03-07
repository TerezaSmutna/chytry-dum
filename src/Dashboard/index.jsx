import React from 'react';
import './style.css';
import Lights from '../Lights';
import Climate from '../Climate';
import smartHomeData from '../smartHomeData';

const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      {
        <Lights
          lights={smartHomeData.lights}
        />
      }
      {
        <Climate
          temperature={data.climate.temperature}
          humidity={data.climate.humidity}
        />
      }
    </main>
  );
};


export default Dashboard;