import React, { Component } from 'react';

//Router
import { Link } from 'react-router-dom';

import axios from 'axios';

//Api-Routes
import { API } from '../helper/routes';

const storage = window.localStorage;

class FormLogin extends Component{
	
	state={
		user: '',
		pass: '',
		loading: false,
		showAlert: false,
		alertMessage: '',
		autocomplete: 'on'
	}
	
	_handleSubmit = (e)=>{
		this.setState({
			user: this.state.user,
			pass: this.state.pass,
			loading: true,
			showAlert: this.state.showAlert
		})
		
		const { user,pass } = this.state
	
		 axios.get(API.Login.login+'?user='+user+'&pass='+pass)
			.then(response => {
				if(response.data.code == '10'){
					storage.setItem('token',response.data.token);
					window.location = '/#/home';
				}
				
				if(response.data.code == '99'){
					this.setState({
						showAlert: true,
						alertMessage: response.data.message
					})
				}
			})
			.catch(err => console.error(err))
		
		
		this.setState({
			loading: false
		})
		
		e.preventDefault();
	}
	
	_handleUser =(e)=>{
		this.setState({
			user: e.target.value,
			pass: this.state.pass,
			loading: this.state.loading
		})
	}

	_handlePass = (e)=>{
		this.setState({
			user: this.state.user,
			pass: e.target.value,
			loading: this.state.loading
		})
	}
	
	_handleCheck = (e)=>{
		this.setState({
			user: this.state.user,
			pass: this.state.pass,
			autocomplete: this.state.autocomplete == 'on'? 'off':'on'
		})
	}
	
	render(){
		
		const { loading, showAlert, autocomplete, alertMessage} = this.state;
		
		return(
			<form onSubmit={this._handleSubmit} className="form">
				<div className="form-row">
					<label htmlFor="user">Email</label>
					<input id="user" className="form-input" onChange={this._handleUser} autoComplete={autocomplete}/>
				</div>
				<div className="form-row">
					<div>
						<input type="checkbox" onChange={this._handleCheck} checked={autocomplete == 'on'} />
						<span className="ml-2">Autocompletar</span>
					</div>
				</div>
				<div className="form-row">
					<label htmlFor="pass">Contrase??a</label>
					<input type="password" id="pass" className="form-input" onChange={this._handlePass}/>
				</div>
				<div className="form-row">
					<Link className="link" to="/register">Registrarse</Link>
					{
						loading
						? <button className="form-button">...</button>
						: <button className="form-button">Ingresar</button>
					}
				</div>
				{
					showAlert?
					<div className="form-row">
						<span className="alert">{alertMessage}</span>
					</div>
					: <div></div>
				}
			</form>
		);
	}
}

export default FormLogin;

