import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Form} from './components/Form';
import { Header } from './components/Header'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Prices } from './pages/Prices'
import {Footer} from './components/Footer';

function App() {
  return <div className='app'>
    <BrowserRouter>
      <Header />
      <Form />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/prices' element={ <Prices /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
}

export default App;
