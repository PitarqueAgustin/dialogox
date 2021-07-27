//React
import React,{ useEffect } from 'react';

//Styles
import '../css/navbar.css';

//Axios
import axios from 'axios';

//Components
import Navbar from '../components/navbar';
import Publications from '../components/box-publications';
import BtnAddPublication from '../components/btn-add-publication';

import { API } from '../api-routes/routes';

export default function Home(){
		
	const token = window.localStorage.getItem('token');	
			
	
	useEffect(() => {
		_verifyToken();
	});

	function _verifyToken(){
		 axios.get(API.Login.auth+'?token='+token)
			.then(response => {
				if(response.data.code != '10')
					window.location = '/';
			})
			.catch(err => console.error(err))		
	}

	return(
		<div>
			<Navbar />
			<Publications />
			<BtnAddPublication />
		</div>
	);
}
