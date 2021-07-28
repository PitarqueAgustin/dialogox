//React
import React, { Component } from 'react';

//Axios
import axios from 'axios';

//Api-Routes
import { API } from '../helper/routes';

const token = window.localStorage.getItem('token');

class FormAddPublication extends Component{
	
	state={
		title: '',
		description: '',
		imageURL: '',
		alert: {
			show: false,
			color: '',
			message: ''
		}
	}
	
	_handleSubmit = async(e)=>{
		e.preventDefault();
		
		const { title, description, imageURL} = this.state;
		
		await axios.get(API.Publications.add+'?token='+token+'&title='+title+
						'&description='+description+'&imageurl='+imageURL)
			.then(response => {
				
				console.log(response.data)
				
				if(response.data.code == "10"){
					this.setState({
						alert:{
							show: true,
							color: 'green',
							message: 'Se agrego correctamente la publicación'
						}
					})
				}
				
				if(response.data.code == "99"){
					this.setState({
						alert:{
							show: true,
							color: 'red',
							message: response.data.message
						}
					})
				}
			})
			.catch(err => console.error(err))
			
	}
	
	_handleTitle = (e)=>{
		this.setState({
			title: e.target.value,
			description: this.state.description,
			imageURL: this.state.imageURL
		})
	}
	
	_handleDescription = (e)=>{
		this.setState({
			title: this.state.title,
			description: e.target.value,
			imageURL: this.state.imageURL
		})
	}
	
	_handleImageURL = (e)=>{
		this.setState({
			title: this.state.title,
			description: this.state.description,
			imageURL: e.target.value
		})
	}
	
	render(){
		
		const { show, color, message} = this.state.alert;
		
	const spanAlert = (
		color == 'green'
		?  <span className="alert-ok">{message}</span>
		:  <span className="alert-err">{message}</span> 
	);
		
		return(
			<form className="form" onSubmit={this._handleSubmit}>
				<div className="form-row">
					<label htmlFor="title">Titulo</label>
					<input id="title" className="form-input" autocomplete="off" onChange={this._handleTitle}/>
				</div>
				<div className="form-row">
					<label htmlFor="description">Descripción</label>
					<textarea id="description" className="form-input" onChange={this._handleDescription}/>
				</div>
				<div className="form-row">
					<label htmlFor="image">Imágen Url</label>
					<input id="image" className="form-input" autocomplete="off" onChange={this._handleImageURL}/>
				</div>
				<div className="form-row">
					<button className="form-button">Publicar</button>
				</div>
				{
					show
					? <div className="form-row">
						{spanAlert}
					  </div>
					: <div></div>
				}
			</form>
		);
	}
	
}

export default FormAddPublication;