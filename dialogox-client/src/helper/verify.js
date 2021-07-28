//axios
import axios from 'axios';

import { API } from './routes';

export function verifyToken(){

	const token = window.localStorage.getItem('token');
	
	axios.get(API.Login.auth+'?token='+token)
		.then(response => {
			if(response.data.code != '10')
				window.location = '/';
		})
		.catch(err => console.error(err))		
	
}