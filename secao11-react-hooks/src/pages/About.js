import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

export default function About() {
  const { contextValue } = useContext(SomeContext)

  return (
    <div>
      <h1>About</h1>
      <p>Valor do contexto: {contextValue}</p>
    </div>
  )
}
