import React from 'react';
import "./tailwind.css"
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className='relative pb-10 min-h-screen'> 
      <Router>
        <Header/>

        <div className="p-3">
          <Routes>
            <Route path='/' caseSensitive={false} element={<Home/>}>
            </Route>
            <Route path='/about' caseSensitive={false} element={<About/>}>
            </Route>
            <Route path='/product/:id' caseSensitive={false} element={<Product/>}>
            </Route>
          </Routes>
           
        </div>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
