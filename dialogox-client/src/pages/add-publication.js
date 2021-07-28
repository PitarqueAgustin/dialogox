//React
import React, { useEffect } from 'react';

//Components
import FormAddPublication from '../components/form-add-publication';
import Navbar from '../components/navbar';

//VerifyToken
import { verifyToken } from '../helper/verify';

export default function AddPublication(){
	
	useEffect(() => {
		verifyToken();
	});
	
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
