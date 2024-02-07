import './Banner.css';
import ImgBanner from '../../Assets/images/cestpaslaplayadelacostadelsol.png';

function Banner() {
    return (
        <div className="banner">
            <img src= {ImgBanner} alt="costa" className="imgBanner" />
            <div className="background"></div>
            <h2 className="titleBanner">Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default Banner