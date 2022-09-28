import React from 'react';
import "./tailwind.css"
import CounterExample from './Components/CounterExample';
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header/>

        <div className="p-3">
          <Routes>
            <Route path='/' caseSensitive={false} element={<Home/>}>
            </Route>
            <Route path='/about' caseSensitive={false} element={<About/>}>
            </Route>
          </Routes>
          <HelloWorld/> 
        </div>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
