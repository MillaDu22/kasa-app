import React from 'react';
import '../Heberger/Heberger.css';

function Heberger (heberger) {
    return (
    <>
    <span className="nameHeberger">{heberger.name}</span>
    <span className="photoHeberger">
        <img src= {heberger.image} alt="profil" className="photoProfil" />
    </span>
    </>
    )
}
export default Heberger;