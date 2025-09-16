import React from 'react'
import { Title } from '../components/title/Title'
import Resume from '../components/resume/Resume'
import Services from '../components/services/Services'


const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 200 }}>
      <Title />
      <Resume />
      <Services />
    </div>
  )
}

export default Home