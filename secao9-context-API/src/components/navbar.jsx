import './navbar.css'
import { Link } from 'react-router-dom'
export default function navbar() {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>Sobre</Link>
        <Link to='/contact'>Contato</Link>
    </nav>
  )
}
