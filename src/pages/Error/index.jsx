import './Error.css';
import Header from '../../components/Header/index';
import NavHeader from '../../components/NavHeader/index.jsx';
import SectionError from '../../components/SectionError/index.jsx';
import Footer from '../../components/Footer/index.jsx';

function Error() {
    return (
        <div className= "errorPage">
        <Header />
        <NavHeader />
        <SectionError/>
        <Footer />
        </div>
    )
}
export default Error