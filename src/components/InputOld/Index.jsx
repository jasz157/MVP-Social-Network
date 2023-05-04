import React from "react";
import './Input.css'


function InputArea(props) {
    
    const name = props.name;
    const placeHolder= props.placeholder
    const type = props.type
    const classifier = props.classifier


    return(
        <input className={classifier} name={name} placeholder={placeHolder} type={type} />
    )
}