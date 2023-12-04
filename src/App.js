import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Lander from './components/Lander';
import Content from './components/Content';



function App() {
  return (
    <div className="App">
        <Navbar />
        <Lander />
        <Content />
    </div>
  );
}

export default App;
