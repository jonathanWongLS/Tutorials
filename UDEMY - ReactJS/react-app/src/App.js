import React from 'react';
import "./tailwind.css"
import CounterExample from './Components/CounterExample';
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <HelloWorld name="Jon"/>
      <CounterExample/>
      <Footer/>
    </div>
  );
}

export default App;
