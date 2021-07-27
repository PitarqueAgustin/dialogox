//Styles
import '../css/btn-add-publication.css';

//Icons
import { FaPlus } from 'react-icons/fa';

//Router
import { Link } from 'react-router-dom';

export default function BntAddPublication(){
	
	return(
		<Link className="btn-add" to="/add-publication">
			<FaPlus />
		</Link>
	);
	
}