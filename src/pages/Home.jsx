import React from 'react'
import About from '../components/about'
import Card from '../components/blog'
import HomeHero from '../components/homehero'
import NewsLetter from '../components/newsletter'

function Home() {
  return (
    <div >
      <HomeHero/>
      <About/>
      <Card/>
      <NewsLetter/>
    </div>
  )
}

export default Home