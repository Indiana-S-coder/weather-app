// import { useState } from 'react'
// import { useFirebase } from "./context/Firebase";
import SignUp from './components/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  // const firebase = useFirebase();

  return (
    <>
    <BrowserRouter>
      <h1>Weather App</h1>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/signup' element={SignUp}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
