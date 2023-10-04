import React, { useState } from 'react'
import "./Game.css"

import boneco6 from "../assets/boneco6.png"
import boneco5 from "../assets/boneco5.png"
import boneco4 from "../assets/boneco4.png"
import boneco3 from "../assets/boneco3.png"
import boneco2 from "../assets/boneco2.png"
import boneco1 from "../assets/boneco1.png"
import boneco0 from "../assets/boneco0.png"

const Game = ({word, category, startCensoredWord, checkLetter, setGameState, playedLetters}) => {
  let err = "w w"
  const [censoredWord, setCensoredWord] = useState(startCensoredWord)
  const [lifes, setLifes] = useState(6)
  const [bonecoIMG, setBonecoIMG] = useState(boneco6)
  //const playedLetters = []

  const printLetters = (w) => {
    const letters = w.split('').map((letter, index) => (
      <span className='letter' key={index}>{letter}</span>
    ));

    return <div>{letters}</div>;
  }

  //transformar playedLetters em string alterando as vezes que é sitada no codigo
  const printPlayedLetters = (w) => {
    return w.map((letter, index) => {
      if(index == 0){
        return <span key={index}>{letter}</span>
      }else{
        return <span key={index}>{" - "+letter}</span>
      }
      
    })

    /*const letters = w.split('').map((letter, index) => (
      <span key={index}>{letter} - </span>
    ));

    return <div>{letters}</div>;*/
  }


  return (
    <div className='Game'>
      <h3 className='tip'>Dica: {category}</h3>
      <div className='lifes'>
        <img src={bonecoIMG} alt="" />
      </div>
      <div className='wrongLettersContainer'>
        {printPlayedLetters(playedLetters)}
      </div>
      <div className='wordContainer'>
        {printLetters(censoredWord)}
      </div>
      <div className='letterConteiner'>
        <p>tente adivinhar uma letra: </p>
        <input type="text" id='letterPlayed' name="letter" maxLength={1} required/>
        <button onClick={() => {
          let playedLetter = document.getElementById("letterPlayed").value
          let [newCensored, haveLetter] = checkLetter(word, censoredWord, playedLetter, playedLetters)
          setCensoredWord(newCensored);

          if(haveLetter != 1){
            if(haveLetter === 2){
                alert("jogada invalida")
            }else{
            setLifes(lifes - 1)

            switch(lifes){
              case 5:
                setBonecoIMG(boneco5)
                break
              case 4:
                setBonecoIMG(boneco4)
                break
              case 3:
                setBonecoIMG(boneco3)
                break
              case 2:
                setBonecoIMG(boneco2)
                break
              case 1:
                setBonecoIMG(boneco1)
                break
              case 0:
                setGameState(0)
                break
              }
            }    
          }

          /*if(haveLetter != 1){
            if(haveLetter === 2){

              alert("jogada invalida")
            }else{
            setLifes(lifes - 1)

              switch(lifes){
                case 5:
                  setBonecoIMG(boneco5)
                  break
                case 4:
                  setBonecoIMG(boneco4)
                  break
                case 3:
                  setBonecoIMG(boneco3)
                  break
                case 2:
                  setBonecoIMG(boneco2)
                  break
                case 1:
                  setBonecoIMG(boneco1)
                  break
                case 0:
                  setGameState(0)
                  break
              }              
            }

            if(censoredWord === word){
              setGameState(2)
            }
          }*/
          
          if(censoredWord === word){
            setGameState(2)
          }

          if(!playedLetters.includes(playedLetter)){
            playedLetters.push(playedLetter)
          }

          document.getElementById("letterPlayed").value = ""
        }}>jogar</button>
      </div>
    </div>
  )
}
        //<span className='letter'>a</span>
        //<span className='blankcube'></span>
export default Game