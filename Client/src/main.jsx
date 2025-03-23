import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
import Hero from './components/hero.jsx'
import Carousel from './components/carousel.jsx'
import Footer_bottom from './components/footerB.jsx'
import Footer_top from './components/footerT.jsx'
import Divider from './components/divider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Footer_top />
    <Divider />
    <Footer_bottom />
  </StrictMode>,
)
