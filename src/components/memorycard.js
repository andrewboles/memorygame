import React from 'react';
import '../styles/memorycard.css';


function MemoryCard(props){
  return(
      <div className="card" id={props.charInfo.charName} onClick={()=>props.onClickFunc(props.charInfo.charName)}>
        <img alt={props.charInfo.charName} src={props.charInfo.imgLink} className="charImg"/>
        <h3 className="charTitle">{props.charInfo.charName}</h3>
      </div>
    )
}

export default MemoryCard