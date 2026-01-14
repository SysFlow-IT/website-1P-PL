import React from 'react'
import { Navbar, Footer } from '@components/layout'
import { Hero } from '@components/home/Hero'
import { Problems } from '@components/home/Problems'
import { Solutions } from '@components/home/Solutions'
import { Training } from '@components/home/Training'
import { FlowOne } from '@components/home/FlowOne'
import { Team } from '@components/home/Team'
import { Testimonials } from '@components/home/Testimonials'
import { WhyChoose } from '@components/home/WhyChoose'
import { CTA } from '@components/home/CTA'
import { Contact } from '@components/home/Contact'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app loaded">
      <Navbar />
      <Hero />
      <Problems />
      <Solutions />
      <Training />
      <FlowOne />
      <Team />
      <Testimonials />
      <WhyChoose />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
