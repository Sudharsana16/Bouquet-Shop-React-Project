import logo from './logo.svg';
import './App.css';
import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';
import Signup from './Form/Signup';
import Login from './Form/Login';
import Home from './Form/Home';
import Occasion from './Form/Occasion';
import Flowers from './Form/Flowers';
import Plants from './Form/Plants';
import Collections from './Form/Collections';
import Birthday from './Container/Birthday';
import Anniversary from './Container/Anniversary';
import Congratulation from './Container/Congratulation';
import Affection from './Container/Affection';
import Sympathy from './Container/Sympathy';
import FlowerinBox from './Container/FlowersinBox';
import FlowerinVase from './Container/FlowerinVase';
import Handtied from './Container/Handtied';
import Luxury from './Container/Luxury';
import Classic from './Container/Classic';
import Rose from './Container/Rose';
import Lilies from './Container/Lilies';
import Carnation from './Container/Carnation';
import Gerbera from './Container/Gerbera';
import Mixed from './Container/Mixed';
import Bamboo from './Container/Bamboo';
import Bonsai from './Container/Bonsai';
import Jade from './Container/Jade';
import Money from './Container/Money';
import Snake from './Container/Snake';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path='/' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/occasion' element={<Occasion></Occasion>}></Route>
      <Route path='/flowers' element={<Flowers></Flowers>}></Route>
      <Route path='/plants' element={<Plants></Plants>}></Route>
      <Route path='/collections' element={<Collections></Collections>}></Route>
      <Route path='/birthday' element={<Birthday></Birthday>}></Route>
      <Route path='/anniversary' element={<Anniversary></Anniversary>}></Route>
      <Route path='/congratulation' element={<Congratulation></Congratulation>}></Route>
      <Route path='/affection' element={<Affection></Affection>}></Route>
      <Route path='/sympathy' element={<Sympathy></Sympathy>}></Route>
      <Route path='/flowerinbox' element={<FlowerinBox></FlowerinBox>}></Route>
      <Route path='/flowerinvase' element={<FlowerinVase></FlowerinVase>}></Route>
      <Route path='/handtied' element={<Handtied></Handtied>}></Route>
      <Route path='/luxury' element={<Luxury></Luxury>}></Route>
      <Route path='/classic' element={<Classic></Classic>}></Route>
      <Route path='/rose' element={<Rose></Rose>}></Route>
      <Route path='/lilies' element={<Lilies></Lilies>}></Route>
      <Route path='/carnation' element={<Carnation></Carnation>}></Route>
      <Route path='/gerbera' element={<Gerbera></Gerbera>}></Route>
      <Route path='/mixed' element={<Mixed></Mixed>}></Route>
      <Route path='/bamboo' element={<Bamboo></Bamboo>}></Route>
      <Route path='/bonsai' element={<Bonsai></Bonsai>}></Route>
      <Route path='/jade' element={<Jade></Jade>}></Route>
      <Route path='/money' element={<Money></Money>}></Route>
      <Route path='/snake' element={<Snake></Snake>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
