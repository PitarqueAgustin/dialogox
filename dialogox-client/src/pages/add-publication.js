//Components
import FormAddPublication from '../components/form-add-publication';
import Navbar from '../components/navbar';


export default function AddPublication(){
	return(
		<div>
			<Navbar />
			<div className="container">
				<h1 className="text-center">Agregar Publicación</h1>
				<FormAddPublication />
			</div>
		</div>
	);	
}
