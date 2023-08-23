/* eslint-disable no-unused-vars */
//import { useContext } from "react"
//import { CounterContext } from "../context/CounterContext"

import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"

export default function Home() {
  //const { counter, setCounter } = useContext(CounterContext)
  const {counter, setCounter} = useCounterContext()

  const {color, dispatch} = useTitleColorContext()  
  const setTitleColor = (color) =>{
    dispatch({type: color})
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>

      <button onClick={() => setCounter(counter + 1)}>
        Add value to counter
      </button>

      <button onClick={() => setTitleColor("RED")}>Vermelho</button>
      <button onClick={() => setTitleColor("BLUE")}>Azul</button>

    </div>
  )
}
