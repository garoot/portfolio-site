
import HomePage from './Home'
import Navbar from './Navbar'
import Bio from './Bio'
import SkillsPage from './Skills'
import WorkPage from './Work'
import React from 'react'

export default function Home() {
  return (
  <div style={{   backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(2, 0, 12)), url("/background2.png")', 
    backgroundPosition: 'top', height: '100vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
      <Navbar/>
      <HomePage/>
      <Bio/>
      <SkillsPage/>
      <WorkPage/>
    </div>
  )
}
