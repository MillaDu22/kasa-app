import './BannerLogement.css';
import Left from '../../Assets/images/Left.png';
import Right from '../../Assets/images/Right.png';
import { useState } from 'react';

function BannerLogement ({images}) {
    let [current, setCurrent] = useState(0);
    let length = images.length;
    const nextImage = () => {
        setCurrent(current === length -1 ? 0 : current +1); 
    };
    const previousImage = () => {
        setCurrent (current === 0 ? length - 1 : current - 1);
    }; 
    return  (
        <div className="slider">
            <div className='containerArrows'>
                {length > 1 && <img src = { Left } alt="précécent" className="left" onClick = { previousImage } />}
                {length > 1 && <img src = { Right } alt="suivant" className="right" onClick = { nextImage } />}
            </div>
            { images.map ((image, index) => {
                return ( 
                    <div key = { index } className = { index === current ? " slides active" : "slides" } >
                    { index === current && ( <img className = "imgSlider" src= { image } alt="imgSlider" />) }
                        <div className ="counterSlide">
                            {length > 1 && <span className="count"> { current+1 }/{ images.length }</span>}
                        </div>
                    </div>
                    )
                }
            )}
        </div> 
    ) 
}
export default BannerLogement;