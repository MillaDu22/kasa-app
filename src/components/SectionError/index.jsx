import './SectionError.css';
import { Link } from 'react-router-dom';
import ErrorPng from '../../Assets/images/404.png'

function SectionError () {
    return (
        <section className="sectionError">
            <div className ="errorDiv">
                <img src = {ErrorPng} alt="number" className="errorNumber" />
            </div>
            <div className ="divOups">
                <h2 className= "pOups">Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            <div className ="errorReturnHome">
            <Link className="linkReturnHome" to="/" exact="true">Retourner sur la page d'accueil</Link>
            </div>
        </section>
    );
}
export default SectionError