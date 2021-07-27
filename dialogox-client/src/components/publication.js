//Styles
import '../css/publication.css';

//Images
import { 
	FaRegCommentDots	
} from 'react-icons/fa';

//Component
import BtnLike from './btn-like';

export default function Publication(props){
	return(
		<div className="card">
			<div className="image">
				<div className="box-profile">
					<img className="profile" src={props.image} />
					<span className="name-profile">{props.name}</span>
				</div>
				<img className="image--publication" src={props.src} />
			</div>
			<div className="description">
				<div>
					<h4>{props.title}</h4>
					<p>{props.description}</p>
					<span>{props.date}</span>
				</div>
				<div className="actions">
					<BtnLike
						id={props.id}
					/>
					<FaRegCommentDots className="icons"/>
				</div>
			</div>
		</div>
	);
}
