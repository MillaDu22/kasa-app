import './Card.css';
import {Link } from 'react-router-dom';
export default function Card ({id, cover, title}) {
    return (
        <Link to = { `/logement-page/${id}`} className= "linkCard">
            <img src ={cover} alt = { id } className="coverCard"/>
            <div className="backgroundCard"></div>
            <h3 className= "titleCard">{ title }</h3>
        </Link>
    )
}