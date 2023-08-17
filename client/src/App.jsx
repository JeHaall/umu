import { useState } from 'react'

import React from 'react';
import { ReactComponent as AppLogo } from './assets/AfiApiApp.svg';
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className = "logo react" alt="React logo" />
        </a>
      </div>
      */}

      <div>
        <a href="https://react.dev">
          <AppLogo className="appLogo" />
        </a>
      </div>
      
    </>
  )
}

export default App
