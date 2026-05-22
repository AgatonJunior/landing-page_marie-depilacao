import React from 'react'
import Hero from '../components/Hero/Hero'
import Diferenciais from '../components/Diferenciais/Diferenciais'
import Especialista from '../components/Especialista/Especialista'
import Servicos from '../components/Servicos/Servicos'

const Home = () => {
  return (
    <main>
      <Hero />
      <Diferenciais/>
      <Especialista />
      <Servicos />
    </main>
  )
}

export default Home
