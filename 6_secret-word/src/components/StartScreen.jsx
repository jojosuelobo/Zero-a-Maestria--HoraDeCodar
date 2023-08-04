/* eslint-disable react/prop-types */
import './StartScreen.css'

export default function StartScreen({startGame}) {
    return (
        <div className='start'>
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar</p>
            <button onClick={startGame}>Jogar</button>
        </div>
    )
}
