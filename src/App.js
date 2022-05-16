import React from 'react';
import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Involvement from './components/Involvement/Involvement';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Leadership from './components/Leadership/Leadership';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/involvement' element={<Involvement/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/leadership' element={<Leadership/>}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
