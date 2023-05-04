import React from "react";
import './Box.css'

export default function Box({children, classifier}) {
   
    let newClassifier = "box";

    if (classifier) {
      newClassifier = "box" + " " + classifier;
    }

    

    return (
        <>
            <div className={newClassifier} >
               {children}
            </div>
        </>
    )
}
