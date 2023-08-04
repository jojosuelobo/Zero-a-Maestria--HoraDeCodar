/* eslint-disable react/prop-types */
import './EndGame.css'
export default function EndGame({retry}) {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>Resetar o jogo</button>
    </div>
  )
}
