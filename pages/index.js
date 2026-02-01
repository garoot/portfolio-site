
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import BioSection from '../components/BioSection';
import SkillsSection from '../components/SkillsSection';
import WorkSection from '../components/WorkSection';
import React from 'react';
import TimelineSection from '../components/TimelineSection';

export default function Home() {
  return (
  <div style={{   backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(2, 0, 12)), url("/background2.png")', 
    backgroundPosition: 'top', height: '100vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
      <Navbar/>
      <HeroSection/>
      <BioSection/>
      <TimelineSection/>
      <SkillsSection/>
      <WorkSection/>
    </div>
  );
}
