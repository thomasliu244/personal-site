import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-body">
        <p className="Description">
          Learn About Thomas Liu
        </p>
        <a
          className="App-link"
          href="https://github.com/thomasliu244"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="Social-media" src="images/GitHub-Mark-Light-64px.png"></img>
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/thomas-liu-29a74b42/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="Social-media" src="images/linkedin.png"></img>
        </a>
        <a
          className="App-link"
          href="https://steamcommunity.com/id/tomtomknifez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="Social-media" src="images/steam.png"></img>
        </a>
      </section>
    </div>
  );
}

export default App;
