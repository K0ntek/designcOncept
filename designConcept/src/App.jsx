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
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Lines from './components/Lines'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    {/* <Lines/> */}
     <div className=' max-w-[1400px] mx-auto px-6 mb-10'>
      <Navbar/>
      <Header/>
      <About/>
      <SectionTwo/>
      <SectionThree/>
      <Pricing/>
      <Contact/>
    </div>
    <Footer/>
   </div>
  )
}

export default App
