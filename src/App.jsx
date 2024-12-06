import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Nav from "./components/Nav";
import Artile from "./components/Article";
import Footer from "./components/Footer";


function App() {
  return (
    <div className='App'>
      <Header/>
      <Nav/>
      <Artile/>
      <Footer/>

    </div>
  )
}

export default App
