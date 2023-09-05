import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import About from './components/aboutPage/About'
import Contact from './components/contactUs/Contact'
import './App.css'
import Essen from '../src/components/essen/Essen'
import Advance from './components/advance/Advance'
import Skit from './components/skit/Skit'
import Exhibition from './components/exhibition/Exhibition'

function App() {
 

  return (
    <div>

    <NavBar/>


    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/essen' element={<Essen />} />
      <Route path='/advance' element={<Advance />} />
      <Route path='/exhibition' element={<Exhibition />} />
      <Route path='/skit' element={<Skit />} />
    </Routes>

    <Footer/>
    </div>
  )
}

export default App
