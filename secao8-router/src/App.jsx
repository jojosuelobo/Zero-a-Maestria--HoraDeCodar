import './App.css'

// Import Pages
import Home from './pages/Home'
import About from './pages/About'
// Import Components
import Navbar from './components/navbar'

// 1: Configurar react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './pages/Products'

function App() {
  return (
    <div className='App'>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* Rota dinâmica */}
          <Route path='/products/:id' element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
