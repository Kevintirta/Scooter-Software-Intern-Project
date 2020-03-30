import React from 'react';
import './InputBar.css'

const InputBar = React.forwardRef((props, ref) =>{
    return(
        <div>
            <p className="text" >{props.text}</p>
            <input ref= {ref} className="inputBar" type="number" placeholder={props.placeholder}/>
        </div>
    )
})

export default InputBar;