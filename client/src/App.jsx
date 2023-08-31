import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ReactComponent as AppLogo } from './assets/AfiApiApp.svg';
import '../styles/App.css'
import Navbar from '../components/navbar'
import { Home, About, Contact, Services } from '../pages';

function App() {

  return (
    <>

      <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Services' element={<Services />}/>
        </Routes>
        <a href="https://react.dev">
          <AppLogo className="appLogo" />
        </a>
      </div>
      
    </>
  )
}

export default App
