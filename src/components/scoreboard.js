import React from 'react';
import '../styles/scoreboard.css';

function Scoreboard(props){
  return (
    <div className="container" id="scoreboard">
      <h2 className="score">This Round's Score: {props.thisScore}</h2>
      <h2 className="score">High Score: {props.highScore}</h2>
    </div>
    )

}

export default Scoreboard