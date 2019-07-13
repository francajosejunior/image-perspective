import React from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'
import useApp from '../hooks/useApp'
import AppContext from '../context/AppContext'

const App = () => {
  const value = useApp()

  return (
    <>
      <AppContext.Provider value={value}>
        <Routes />
      </AppContext.Provider>
    </>
  )
}

export default App
