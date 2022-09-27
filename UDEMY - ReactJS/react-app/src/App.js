import React from 'react';
import './App.css';
import CounterExample from './Components/CounterExample';
import HelloWorld from './Components/HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld name="Jon"/>
      <CounterExample/>
    </div>
  );
}

export default App;
