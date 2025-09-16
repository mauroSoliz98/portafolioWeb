import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router';
import { Home, About, Projects, Contact } from './pages';
import LayoutDashborad from './components/layouts';

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigate to="/my-website" replace/>}/>
      <Route path='/my-website' element={<LayoutDashborad/>}>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
    </Routes>
  )
}
