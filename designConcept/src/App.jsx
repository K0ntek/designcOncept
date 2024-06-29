import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' max-w-[1400px] mx-auto px-10 mb-10'>
      <Navbar/>
      <Header/>
      <About/>
      <SectionTwo/>
      <SectionThree/>
      <Contact/>
    </div>
  )
}

export default App
