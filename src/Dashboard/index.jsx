import React from 'react';
import './style.css';
import Lights from '../Lights';
import smartHomeData from '../smartHomeData';

const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      {
        <Lights
          lights={smartHomeData.lights}
        />
      }
    </main>
  );
};


export default Dashboard;