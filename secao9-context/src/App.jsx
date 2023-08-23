import './App.css'

// Import Pages
import Home from './pages/Home'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

// Import Components
import Navbar from './components/navbar'

// 1: Configurar react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
