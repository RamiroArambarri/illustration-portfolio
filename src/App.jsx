import { useState, useRef } from 'react'
import logo from '/images/other/logo.png';
import Gallery from './components/Gallery';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import useIsMobile from './hooks/useIsMobile';


function App() {
  const [activeGallery, setActiveGallery] = useState(0)
  const [showMenu, setShowMenu] = useState(false)


  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  const galleryNavHandler = (index) => {
    setActiveGallery(index)
    scrollToSection('gallery-section')
  }

  return (
    <>
      <header>
        <img src={logo} alt="logotipo zorro" className="logo" />
        <h1>Ramiro Arambarri</h1>
      </header>
      <button id="menu-main-button" onClick={() => setShowMenu(!showMenu)}><strong>Menú</strong></button>
      <nav className={`menu ${!showMenu && 'menu-compact'}`} >
        <ul>
          <li onClick={() => scrollToSection('gallery-section')}><strong>Galería</strong></li>
          <li onClick={() => scrollToSection('about')}><strong>Sobre mí</strong></li>
          <li onClick={() => scrollToSection('contact-me')}><strong>Contáctame</strong></li>
        </ul>
      </nav>
      <section id="gallery-section">
        <nav className="gallery-nav">
          <ul>
            <li onClick={() => galleryNavHandler(0)} className={`gallery-nav-button ${activeGallery == 0 && 'gallery-nav-active'}`}
            >Digital</li>
            <li onClick={() => galleryNavHandler(1)} className={`gallery-nav-button ${activeGallery == 1 && 'gallery-nav-active'}`}
            >Pixel art</li>
            <li onClick={() => galleryNavHandler(2)} className={`gallery-nav-button ${activeGallery == 2 && 'gallery-nav-active'}`}
            >Sketchbook</li>
          </ul>
        </nav>
        <Gallery galleryIndex={activeGallery} />
      </section>
      <AboutSection />
      <ContactSection />
    </>
  )
}

export default App
