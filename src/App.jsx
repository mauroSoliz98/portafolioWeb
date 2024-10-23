import './App.css'
import { Title } from './components/title/Title'
import Aboutme from './components/aboutme/Aboutme'
import Tecnologies from './components/tecnologies/Tecnologies'

export default function App() {
  return (
   <div className='container'>
    <div className='content'>
      <Title/>
      <Aboutme/>
      <Tecnologies/>
    </div>
   </div>
  )
}
