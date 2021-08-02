//React
import React, { Component } from 'react';

//axios
import axios from 'axios';

//Api-Routes
import { API } from '../helper/routes';

class DescriptionProfile extends Component{
	
	state={
		data: []
	}
	
	componentDidMount = async ()=>{
		
		const token = window.localStorage.getItem('token');
		
		await axios.get(API.Profile.data+'?token='+token)
			.then(response =>{
				this.setState({
					data: response.data
				})
			})
			.catch(err =>{
				console.error(err)
			})
	}
	
	render(){	
	
		const { data } = this.state;
	
		return(
			<div className="container-profile">
				<ul className="description--profile">
					<li><b>Teléfono: </b>{data.Telefono}</li>
				</ul>
			</div>
		);
	}
	
} 

export default DescriptionProfile;