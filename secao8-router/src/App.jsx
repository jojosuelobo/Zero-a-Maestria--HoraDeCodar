import './App.css'

// Import Pages
import Home from './pages/Home'
import About from './pages/About'
// Import Components
import Navbar from './components/navbar'

// 1: Configurar react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
