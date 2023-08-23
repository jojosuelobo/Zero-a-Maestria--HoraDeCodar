/* eslint-disable no-unused-vars */
import './Home.css'

import {Link} from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'

export default function Home() {
  // Carregamento de dados
  const url = 'http://localhost:3000/products'
  const {data: items, loading, error} = useFetch(url)

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className='products'>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              {/* Rota dinamica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
