import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Signin from './pages/Signin.jsx'
import Home from './pages/Home.jsx'
import { Toaster } from "@/components/ui/toaster"


function App() {
 

  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/sign-in"} element={<Login/>}/>
          <Route path={"/sign-up"} element={<Signin/>}/>

          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App