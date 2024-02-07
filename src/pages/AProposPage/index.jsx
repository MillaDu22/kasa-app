import React from 'react';
import Header from '../../components/Header/index';
import NavHeader from '../../components/NavHeader/index.jsx';
import BannerAPropos from '../../components/BannerAPropos/index.jsx';
import Collapse from '../../components/Collapse/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import './AProposPage.css';

function AProposPage() {
    
    return (
        <div className= "AProposPage">
        <Header />
        <NavHeader />
        <BannerAPropos />
        <section className=" collapsesAbout">
            <div className = "box">
                <Collapse title='Fiabilité' content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiée par nos équipes." />
            </div>
            <div className = "box">
                <Collapse title='Respect' content="La bienveillence fait partie des valeurs fondatrices de Kasa. Tout comportement discrimminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            </div>
            <div className = "box">
                <Collapse title='Service' content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. Nhésitez pas à nous contacter si vous avez la moindre question." />
            </div>
            <div className = "box">
                <Collapse title='Sécurité' content="La sécurité est la priorité de Kasa. Aussi bien pournos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </section>
        <Footer />
        </div>
    )
}
export default AProposPage