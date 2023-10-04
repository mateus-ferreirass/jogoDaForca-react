import React from 'react'
import "./GameOver.css"

const GameOver = ({setGameState}) => {
  return (
    <div>
      <h1 style={{marginTop: "10%"}}>You Win</h1>
      <button className='restart_btn' onClick={() => {setGameState(1)}}>restart</button>
    </div>
    
  )
}

export default GameOver