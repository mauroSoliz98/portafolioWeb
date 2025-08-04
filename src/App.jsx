import './App.css'
import React, { useState, useEffect } from 'react'
import { Title } from './components/title/Title'
import Aboutme from './components/aboutme/Aboutme'
import Tecnologies from './components/tecnologies/Tecnologies'

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
   <div className='container'>
    <div className='content'>
      <Title isMobile={isMobile}/>
      <Aboutme isMobile={isMobile}/>
      <Tecnologies isMobile={isMobile}/>
    </div>
   </div>
  )
}
