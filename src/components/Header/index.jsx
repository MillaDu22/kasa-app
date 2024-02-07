import './Header.css'
import LogoHeader from '../../Assets/images/LOGO-HEADER.png'
function Header() {
    return (
        <div className="logoTitle" >
            <img src = {LogoHeader} alt="redLogo" className="logoHeader" />
        </div>
    )
}
export default Header