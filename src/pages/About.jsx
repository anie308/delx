import React from 'react'
import AboutDesc from '../components/aboutDesc'
import AboutPagehero from '../components/aboutPagehero'
import StaffSection from '../components/staffSection'

function About() {
  return (
    <div>
      <AboutPagehero/>
      <AboutDesc/>
      <StaffSection/>
    </div>
  )
}

export default About