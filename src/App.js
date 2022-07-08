import React from 'react';
import './App.css';
import './App.scss';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <hr/>
        <About/>
        <hr/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
