import React from 'react';
import './App.css';
import pdf from './resume.pdf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Sorry for the inconvenience!
          Website under construction.
        </p>
        <a className='App-link' href={pdf} target="_blank">View Resume</a>
      </header>
    </div>
  );
}

export default App;
