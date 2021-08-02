//react
import React, { Component } from 'react';

//axios
import axios from 'axios';

//Api-Routes
import { API } from '../helper/routes';

class ImageProfile extends Component{

	state={
		image: '',
		imageDefault: 'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'
	}
	
	componentDidMount = async ()=>{
		
		const token = window.localStorage.getItem('token');
		
		await axios.get(API.Profile.data+'?token='+token)
			.then(response =>{
				console.log(token)
				console.log(response.data)
				this.setState({
					image: response.data.Imagen
				})
			})
			.catch(err =>{
				console.error(err);
			})
	}
	
	render(){
		
		const { image, imageDefault } = this.state;
		
		return(
			<div className="container-profile">
				<div className="image--profile">
				{
					image == ''
					?
					<img src={imageDefault} alt="image profile" />
					:
					<img src={image} alt="image profile" />
				}
				</div>
			</div>
		);
	}
} 

export default ImageProfile;