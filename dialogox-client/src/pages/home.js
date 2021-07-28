//React
import React,{ useEffect } from 'react';

//Styles
import '../css/navbar.css';

//Components
import Navbar from '../components/navbar';
import Publications from '../components/box-publications';
import BtnAddPublication from '../components/btn-add-publication';

//VerifyToken
import { verifyToken } from '../helper/verify';


export default function Home(){
					
	useEffect(() => {
		verifyToken();
	});

	return(
		<div>
			<Navbar />
			<Publications />
			<BtnAddPublication />
		</div>
	);
}
