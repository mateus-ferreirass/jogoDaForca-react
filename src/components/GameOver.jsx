import React from 'react'
import "./GameOver.css"
import "./Game.css"

import bonecoIMG from "../assets/boneco0.png"

const GameOver = ({setGameState, word}) => {
  const printLetters = (w) => {
    const letters = w.split('').map((letter, index) => (
      <span className='letter' key={index}>{letter}</span>
    ));

    return <div>{letters}</div>;
  }

  return (
      <div className='Game'>
      <h3 className='tip'>ITS OVER</h3>
      <div className='lifes'>
        <img src={bonecoIMG} alt="" />
      </div>
      <button className='restart_btn' onClick={() => {setGameState(1)}}>restart</button>
    </div>
  )
}

export default GameOver