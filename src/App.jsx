import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Portfolio from './components/sections/Portfolio'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import Booking from './components/sections/Booking'
import Footer from './components/layout/Footer'


export default function App(){
  return(
    <>
      <Header/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Services/>
      <Testimonials/>
      <Booking/>
      <Footer/>
    </>
  )
}