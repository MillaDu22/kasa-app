import './Footer.css';
import LogoFooter from '../../Assets/images/LOGO-FOOTER.png'

function Footer() {
    return (
        <div className="backFooter">
            <div className="logoFooter">
                <h2><img src = {LogoFooter} alt="blackLogo" className="imgLogoFooter" /></h2>
            </div>
            <h3 className= "copyright">© 2020 Kasa. All rights reserved</h3>
        </div>
    )
}

export default Footer