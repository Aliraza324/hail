import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import ServiceAreas from './components/ServiceAreas'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <ServiceAreas />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
