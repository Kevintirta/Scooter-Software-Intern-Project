import React from 'react';
import './InputBar.css'

const InputBar = (props) =>{
    return(
        <div>
            <p className="text" >{props.text}</p>
            <input className="inputBar" type="number" placeholder={props.placeholder} onChange={e => props.inputHandler(e.target.value)}/>
        </div>
    )
}

export default InputBar;