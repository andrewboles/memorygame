import './styles/App.css';
import MemoryCard from './components/memorycard'
import Scoreboard from './components/scoreboard'
import ash from './images/Ash.png'
import bloodhound from './images/Bloodhound.png'
import bangalore from './images/Bangalore.png'
import caustic from './images/Caustic.png'
import crypto from './images/Crypto.png'
import fuse from './images/Fuse.png'
import gibraltar from './images/Gibraltar.jpg'
import horizon from './images/Horizon.png'
import lifeline from './images/Lifeline.png'
import loba from './images/Loba.png'
import mirage from './images/Mirage.png'
import octane from './images/Octane.png'
import pathfinder from './images/Pathfinder.png'
import rampart from './images/Rampart.png'
import revenant from './images/Revenant.png'
import seer from './images/Seer.png'
import valkyrie from './images/valkyrie.png'
import wattson from './images/Wattson.png'

import React, { useState, useEffect } from "react";

function App() {

  let [bestScore,setbestScore] = useState(0);
  let initcharInfo = [{
    charName: "Bloodhound",
    imgLink: bloodhound,
  },{
    charName: "Bangalore",
    imgLink: bangalore,
  },{
    charName: "Ash",
    imgLink: ash,
  },{
    charName: "Caustic",
    imgLink: caustic,
  },{
    charName: "Crypto",
    imgLink: crypto,
  },{
    charName: "Fuse",
    imgLink: fuse,
  },{
    charName: "Gibraltar",
    imgLink: gibraltar,
  },{
    charName: "Horizon",
    imgLink: horizon,
  },{
    charName: "Lifeline",
    imgLink: lifeline,
  },{
    charName: "Loba",
    imgLink: loba,
  },{
    charName: "Mirage",
    imgLink: mirage,
  },{
    charName: "Octane",
    imgLink: octane,
  },{
    charName: "Pathfinder",
    imgLink: pathfinder,
  },{
    charName: "Rampart",
    imgLink: rampart,
  },{
    charName: "Revenant",
    imgLink: revenant,
  },{
    charName: "Seer",
    imgLink: seer,
  },{
    charName: "Valkyrie",
    imgLink: valkyrie,
  },{
    charName: "Wattson",
    imgLink: wattson,
  }
  ];

  let [charInfo, setCharInfo] = useState(initcharInfo);
  const [chosenArr, setchosenArr] = useState([]);
  let [thisScore, setthisScore] = useState(0);
  let [highScore, sethighScore] = useState(0);

  useEffect(()=>{
   shuffleArray(charInfo)
  },[chosenArr, thisScore, highScore])

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async function choseCharacter(e){
    let newClass = ""
    if(chosenArr.includes(e)){
      await setthisScore(0)
      await setchosenArr([])
      newClass = "App-wrong"
      if(thisScore>highScore){
        sethighScore(thisScore)
      }
    } else{
      newClass = "App-correct"
      await setthisScore(thisScore + 1)
      await setchosenArr(chosenArr.concat([e]));
    }
    document.getElementById("scoreboard").classList.toggle(newClass);
    setTimeout(() => {document.getElementById("scoreboard").classList.toggle(newClass)}, 650);
  }

  return (
    <div className="App" id="container">
      <Scoreboard thisScore={thisScore} highScore={highScore}/>
      {charInfo.map(char=>{
        return <MemoryCard charInfo={char} onClickFunc={choseCharacter}/>
      })}
      
    </div>
  );
}

export default App;
