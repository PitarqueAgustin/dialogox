//Styles
import '../css/login.css';

//Components
import FormLogin from '../components/form-login';

export default function Login(){
	
	return(
		<div className="container container-grid">
			<h1 className="text-center">Iniciar Sesión</h1>
			<FormLogin />
		</div>
	);
}