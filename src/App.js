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
      <div class="container">
        <div className="col">
          <img className="tv-show-poster" src={avatar} alt='avatar the last airbender' />
        </div>
        <div className="col">
          <img className="tv-show-poster" src={biglittle} alt='Big Little Lies' />
        </div>
        <div className="col">
          <img className="tv-show-poster" src={curb} alt='Curb your Enthusiasm' />
        </div>
      </div >
      <div class="container">
        <div className="col">
          <img className="tv-show-poster" src={GLOW} alt='GLOW' />
        </div>
        <div className="col">
          <img className="tv-show-poster" src={naked} alt='Naked Director' />
        </div>
        <div className="col">
          <img className="tv-show-poster" src={rupaul} alt='rupaul' />
        </div>
      </div >
    </div >
  );
}

export default App;
