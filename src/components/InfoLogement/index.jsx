import { Navigate} from 'react-router-dom';
import '../../components/InfoLogement/InfoLogement.css';
import {useParams} from "react-router-dom";
import datasLogements from '../../datasLogements.json';
import Heberger from '../Heberger/index.jsx';
import Notation from '../../components/Notation/index.jsx';
import Tag from '../../components/Tags/index.jsx';
import Collapse from '../../components/Collapse/index.jsx';
import BannerLogement from '../BannerLogement';

const InfoLogement = () => {
    const id = useParams(); 
    const ficheLogement = datasLogements.find ((dataslogement) => dataslogement.id === id.id);

    const TagsLogement = ficheLogement?.Tags.map ((Tags, index) => {
        return <Tag key = {index} title = {Tags} />
    });
    const equipementsLogement = ficheLogement?.equipements.map((equipement, index) => {
        return <div className="nav" key= {index}>
                    <ul className = "ulList"  >
                        <li className="liList">{equipement}</li>
                    </ul>
                </div>
    })
    return (
        <>
        {ficheLogement ? (
            <div className= 'infoLogement'>
                <BannerLogement images = {ficheLogement?.photos}/>
                <section className="sectionInfo">
                    <div className="rowBoxes1">
                        <div className="leftBox">
                            <h2 className ="title">{ ficheLogement?.title }</h2>
                            <h3 className = "location">{ ficheLogement?.location }</h3>
                            <div className=" containerMotsCles">{TagsLogement}</div> 
                        </div>
                        <div className="rightBox">
                            <div className ="heberger">
                                <Heberger name = { ficheLogement?.héberger.nom } image= {ficheLogement?.héberger.image} />
                            </div>
                            <Notation score = {ficheLogement.note} />
                        </div>
                    </div>
                    <div className="rowBoxes2">
                        <div className = "boxInfo">
                        <Collapse title = "Description" content={ficheLogement?.description} />
                        </div>
                        <div className = "boxInfo">
                            <Collapse title = "Equipements" content={equipementsLogement}/>
                        </div>
                    </div>
                </section>
            </div>
            ) : <Navigate replace to = "/src/components/SectionError" />
        }
        </>
    );
};
export default InfoLogement;