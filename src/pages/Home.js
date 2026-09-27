import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Neuroplasticity Drills</h1>
      <p>Train your brain with fun movement exercises</p>
      <Link to="/drills"><button>Start Training</button></Link>
    </div>
  );
}

export default Home;
