import React, { Component } from 'react';

//Router
import { Link } from 'react-router-dom';

import axios from 'axios';

const API = 'http://localhost/api-dialogox/Register/register.php';

class FormRegister extends Component{
	
	state={
		user: '',
		pass: '',
		rPass: '',
		name: '',
		loading: false,
		showAlert: false,
		alertMessage: ''
	}
	
	_handleSubmit = (e)=>{
		
		const { user, pass, rPass, name} = this.state;
		
		axios.get(API+'?user='+user+
					  '&pass='+pass+
					  '&rpass='+rPass+
					  '&name='+name)
		  .then(response => {
			  
			  if(response.data.code == '10'){
				window.location = '/'
			  }
			  
			  if(response.data.code == 99){
				this.setState({
					showAlert: true,
					alertMessage: response.data.message
				})
			  }
			  
		  })
		  .catch(err => console.error(err))
		
		
		e.preventDefault();
	}
	
	_handleUser = (e)=>{
		this.setState({
			user: e.target.value,
			pass: this.state.pass,
			rPass: this.state.rPass,
			name: this.state.name
		})
	}
	
	_handleName = (e)=>{
		this.setState({
			user: this.state.user,
			pass: this.state.pass,
			rPass: this.state.rPass,
			name: e.target.value
		})
	}

	_handlePass = (e)=>{
		this.setState({
			user: this.state.user,
			pass: e.target.value,
			rPass: this.state.rPass,
			name: this.state.name
		})
	}

	_handleRpass = (e)=>{
		this.setState({
			user: this.state.user,
			pass: this.state.pass,
			rPass: e.target.value,
			name: this.state.name
		})		
	}
	
	render(){
		
		const { showAlert, alertMessage, loading } = this.state;
		
		return(
			<form className="form" onSubmit={this._handleSubmit}>
				<div className="form-row">
					<label htmlFor="user">Email</label>
					<input id="user" className="form-input" autocomplete="off" onChange={this._handleUser} />
				</div>
				<div className="form-row">
					<label htmlFor="name">Nombre</label>
					<input id="name" className="form-input" autocomplete="off" onChange={this._handleName} />
				</div>
				<div className="form-row">
					<label htmlFor="pass">Contraseña</label>
					<input type="password" id="pass" className="form-input" onChange={this._handlePass}/>
				</div>
				<div className="form-row">
					<label htmlFor="pass">Repite Contraseña</label>
					<input type="password" id="pass" className="form-input" onChange={this._handleRpass} />
				</div>
				<div className="form-row">
					<Link to="/"  className="link">Inicia Sesión</Link>
					{
						loading
						? <button className="form-button button-register">...</button>
						: <button className="form-button button-register">Registrarse</button>
					}	
				</div>
				{
					showAlert
					? <div className="form-row">
						<span className="alert">{alertMessage}</span>
					  </div>
					: <div></div>
				}				
			</form>
		);
	}
	
}

export default FormRegister;