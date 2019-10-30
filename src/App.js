import React from 'react';
import './App.css';
import killerTomato from './killer-tomato.jpg';
// import { avatar, biglittle, curb, glow, naked, rupaul } from './images';
import avatar from './images/avatar.jpg';
import biglittle from './images/biglittle.jpg';
import curb from './images/curb.jpg';
import GLOW from './images/GLOW.jpg';
import rupaul from './images/rupaul.png';
import naked from './images/naked.jpg';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix</h1>
      <img src={killerTomato} alt='attack of the killer tomatoes' />
      <div className="container">


        <div className="image-container">
          <img className="tv-show-poster" src={avatar} alt='avatar the last airbender' />
          <div className="tv-show-overlay">
            <h2>Avatar the Last Airbender</h2>
          </div>
        </div>




        <div className="image-container">
          <img className="tv-show-poster" src={biglittle} alt='Big Little Lies' />
          <div className="tv-show-overlay">
            <h2>Big Little Lies</h2>
          </div>
        </div>
        <div className="image-container">
          <img className="tv-show-poster" src={curb} alt='Curb your Enthusiasm' />
          <div className="tv-show-overlay">
            <h2>Curb Your Enthusiasm</h2>
          </div>
        </div>
      </div >
      <div className="container">
        <div className="image-container">
          <img className="tv-show-poster" src={GLOW} alt='GLOW' />
          <div className="tv-show-overlay">
            <h2>GLOW</h2>
          </div>
        </div>
        <div className="image-container">
          <img className="tv-show-poster" src={naked} alt='Naked Director' />
          <div className="tv-show-overlay">
            <h2>Naked Director</h2>
          </div>
        </div>
        <div className="image-container">
          <img className="tv-show-poster" src={rupaul} alt='rupaul' />
          <div className="tv-show-overlay">
            <h2>Ru Paul's Drag Race UK</h2>
          </div>
        </div>
      </div >
    </div >
  );
}

export default App;
