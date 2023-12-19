import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Merger from './Components/Merger'
import Mainsol from './Components/Mainsol'


const App = () => {
  return (
    <>
      <Routes>
       <Route path='/'  Component={Merger}/>
       <Route path='/MainSol' Component={Mainsol} />
      </Routes>
    </>
  )
}

export default App