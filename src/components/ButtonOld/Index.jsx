import React from "react"
import './Button.css';


export default function Button(props) {

    const value = props.value;
    const classifier = props.classifier;

    return (
        <button onClick={(e) => {
            e.preventDefault();

            window.location.replace('/feed');

        }} className={classifier}>{value}</button>
    )
}


