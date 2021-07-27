//react
import React, { Component } from 'react';

//axios
import axios from 'axios';

const API = "http://localhost/dialogox/api-dialogox/Profile/data.php";

const token = window.localStorage.getItem('token');

class ImageProfile extends Component{

	state={
		image: ''
	}
	
	componentDidMount = ()=>{
		axios.get(API+'?token='+token)
			.then(response =>{
				this.setState({
					image: response.data.Imagen
				})
			})
			.catch(err =>{
				console.error(err);
			})
	}
	
	render(){
		
		const { image } = this.state;
		
		return(
			<div className="container-profile">
				<div className="image--profile">
					<img src={image} alt="image profile" />
				</div>
			</div>
		);
	}
} 

export default ImageProfile;