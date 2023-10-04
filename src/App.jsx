import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Game from './components/Game'
import GameOver from './components/GameOver'
import GameWin from './components/GameWin'

import words from "./Data/palavras.jsx"

function App() {

  const [censoredWord, setCensoredWord] = useState()
  const [gameState, setGameState] = useState(1)

  const setGameState2 = (n) => {
    setGameState(n)
  }

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    
    //let word = "thot invicto"
    let censoredWord = ""

    for (let i = 0; i <word.length; i++) {
      if(word[i] === " "){
        censoredWord += " " //censoredWord.replace(censoredWord.substring(i), "*")
      }else{
        censoredWord += "*"
      }
    }
    
    return [word, category, censoredWord]
  }

  const checkLetter = (word2, cword2, checkl, playedLetters) => {
    let cword3 = ""
    let haveLetter = 0

    console.log(word2)

    if(checkl === "" || checkl === " " || playedLetters.includes(checkl)){
      haveLetter = 2
      cword3 = cword2
    }else{
      for (let i = 0; i < word2.length; i++){
        if(word2[i] === checkl){
          cword3 += checkl
          haveLetter = 1
        }else{
          cword3 += cword2[i]
        }
      }
    }
    /*for (let i = 0; i < word2.length; i++){
      if(word2[i] === checkl){
        cword3 += checkl
        haveLetter = 1
      }else{
        cword3 += cword2[i]
      }
    }*/

    return [cword3, haveLetter]
  }

  let [word, category, cword] = pickWordAndCategory()

  return (
    <>
      <div className='main'>
        {gameState === 1 && <Game  word={word} playedLetters={[]} category={category} startCensoredWord={cword} checkLetter={checkLetter} setGameState={setGameState2}/>}
        {gameState === 2 && <GameWin setGameState={setGameState2}/>}
        {gameState === 0 && <GameOver setGameState={setGameState2} word={word}/>}

      </div>
    </>
  )
}

export default App

