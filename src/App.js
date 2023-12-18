import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Merger from './Components/Merger'


const App = () => {
  return (
    <>
      <Routes>
       <Route path='/'  Component={Merger}/>
      </Routes>
    </>
  )
}

export default App