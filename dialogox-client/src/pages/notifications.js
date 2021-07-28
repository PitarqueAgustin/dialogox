//React
import React, { useEffect } from 'react';

//Styles
import '../css/login.css';

//Components
import Navbar from '../components/navbar';
import Notifications from '../components/box-notifications';

//VerifyToken
import { verifyToken } from '../helper/verify';


export default function Notification(){
	
	useEffect(() => {
		verifyToken();
	});
	
	return(
		<div>
			<Navbar />
			<div className="container">
				<h1 className="text-center mb-2">Notificaciones</h1>
				<Notifications />
			</div>
		</div>
	);
}