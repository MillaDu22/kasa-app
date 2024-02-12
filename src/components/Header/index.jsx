import { Link } from 'react-router-dom'
import './Header.css'
import LogoHeader from '../../Assets/images/LOGO-HEADER.png'

function Header() {
    return (
        <Link className="logoTitle" to="/" exact="true">
            <h1><img src = {LogoHeader} alt="redLogo" className="logoHeader" /></h1>
        </Link>
    )
}
export default Header;