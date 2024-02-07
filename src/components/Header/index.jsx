import './Header.css'
import LogoHeader from '../../Assets/images/LOGO-HEADER.png'
function Header() {
    return (
        <div className="logoTitle" >
            <h1><img src = {LogoHeader} alt="redLogo" className="logoHeader" /></h1>
        </div>
    )
}
export default Header