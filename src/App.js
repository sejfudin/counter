import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterHeader from './components/CounterHeader'
import Increment from './components/Increment'
import './Counter.css'

function App() {
  return (
    <div className="App">
      <CounterHeader />
      <Increment />
    </div>
  );
}

export default App;
