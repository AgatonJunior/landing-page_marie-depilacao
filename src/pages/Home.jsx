import React from 'react'
import Hero from '../components/Hero/Hero'
import Diferenciais from '../components/Diferenciais/Diferenciais'
import Especialista from '../components/Especialista/Especialista'
import Servicos from '../components/Servicos/Servicos'
import Galeria from '../components/Galeria/Galeria'
import Comentarios from '../components/Comentarios/Comentarios'
import CTA from '../components/CTA/CTA.jsx'
import Footer from '../components/Footer/Footer.jsx'

const Home = () => {
  return (
    <main>
      <Hero />
      <Diferenciais/>
      <Especialista />
      <Servicos />
      <Galeria />
      <Comentarios />
      <CTA />
      <Footer />
    </main>
  )
}

export default Home
