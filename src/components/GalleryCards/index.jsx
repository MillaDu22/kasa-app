import './GalleryCards.css';
import datasLogements from '../../datasLogements.json';
import Card from "../Card/index.jsx";

export default function GalleryCards() {
    return (
		<section className ="backCards"> {datasLogements.map(dataLogements => {
			return (
				<Card 
				key= { dataLogements.id }
				id = { dataLogements.id } 
				title = { dataLogements.title }
				cover = { dataLogements.cover } />
			)
		})}
		</section>
    )
}