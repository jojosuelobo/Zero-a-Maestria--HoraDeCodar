/* eslint-disable no-unused-vars */
// CSS
import './App.css'

// REACT
import { useState, useEffect, useCallback } from 'react'

// data
import {wordsList} from './data/words'

// Components
import StartScreen from './components/StartScreen'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  
  return (
    <div className='App'>
      { gameStage === 'start' && <StartScreen/> }
      { gameStage === 'game' && <StartScreen/> }
      { gameStage === 'end' && <StartScreen/> }
    </div>
  )
}

export default App
