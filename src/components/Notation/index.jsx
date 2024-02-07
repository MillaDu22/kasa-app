import React from 'react';
import '../Notation/Notation.css';
import starLight from '../../Assets/images/starLight.png';
import starFull from '../../Assets/images/starFull.png';

function Notation (heberger) {
    const score = heberger.score;
    const notes = [1, 2, 3, 4, 5];
    return (
        <div className="containerNotation">{notes.map((note) => score >= note ? (
            <img key= {note.toString()} className="star" src= {starFull} alt= "starFull" />) : (
            <img key= {note.toString()} className="star" src= {starLight} alt="starLight" />)  
        )}
    </div>
    )
}
export default Notation;