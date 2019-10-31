import React from 'react';
import './App.css';
import killerTomato from './killer-tomato.jpg';
import TVShows from './TVShows';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix</h1>
      <img src={killerTomato} alt='attack of the killer tomatoes' />
      <TVShows />
    </div>
  );
}


export default App;


