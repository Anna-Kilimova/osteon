import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.scss';
import { Header } from './components/Header'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Prices } from './pages/Prices'

function App() {
  return <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/prices' element={ <Prices /> } />
      </Routes>
    </BrowserRouter>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
}

export default App;
