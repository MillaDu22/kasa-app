import './Footer.css';
import LogoFooter from '../../Assets/images/LOGO-FOOTER.png'

function Footer() {
    return (
        <div className="backFooter">
            <div className="logoFooter">
            <img src = {LogoFooter} alt="blackLogo" className="imgLogoFooter" />
            </div>
            <p className= "copyright">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer