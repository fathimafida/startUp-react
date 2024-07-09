
import gsap from 'gsap'
import './App.css'
import BrandSection from './common/BrandSection/BrandSection'
import Footer from './common/Footer/Footer'
import Hero from './common/Hero'
import NavBar from './common/NavBar/NavBar'
import Section4 from './common/Section4/Section4'
import Section5 from './common/Section5/Section5'
import Section6 from './common/Section6/Section6'

import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)
function App() {
  

  return (
    <div>
      <NavBar />
      <Hero />
      <BrandSection />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer/>
   </div>
  )
}

export default App
