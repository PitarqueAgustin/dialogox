//React
import React, { Component } from 'react';

//axios
import axios from 'axios';

const API = "http://localhost/dialogox/api-dialogox/Profile/data.php";

const token = window.localStorage.getItem('token');

class DescriptionProfile extends Component{
	
	state={
		data: []
	}
	
	componentDidMount = ()=>{
		
		axios.get(API+'?token='+token)
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