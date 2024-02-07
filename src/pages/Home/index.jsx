import './Home.css';
import Header from '../../components/Header/index.jsx';
import NavHeader from '../../components/NavHeader/index.jsx';
import Banner from '../../components/Banner/index.jsx';
import GalleryCards from '../../components/GalleryCards/index.jsx';
import Footer from '../../components/Footer/index.jsx'

function Home() {
    return (
        <div className="homePage">
            <Header />
            <NavHeader />
            <Banner />
            <GalleryCards />
            <Footer />
        </div>
    )
}

export default Home