import React from 'react'
import About from '../components/about'
import Card from '../components/blog'
import HomeHero from '../components/homehero'

function Home() {
  return (
    <div >
      <HomeHero/>
      <About/>
      <Card/>
    </div>
  )
}

export default Home