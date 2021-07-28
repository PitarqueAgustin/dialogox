//React
import React, { Component } from 'react';

//Axios
import axios from 'axios';

//Icons
import { 
	FaRegWindowMinimize
} from 'react-icons/fa';


//Api-Routes
import { API } from '../helper/routes';

const token = window.localStorage.getItem('token');

class BtnEditProfile extends Component{
	
	state ={
		open: ''
	}
	
	componentDidMount = ()=>{
		
		axios.get(API.Profile.data+'?token='+token)
		.then(response =>{
			document.querySelector('#url-image').value = response.data.Imagen;
			document.querySelector('#phone').value = response.data.Telefono;
		})
		.catch(err =>{
			console.error(err);
		})
		
	}
	
	
	_handleModal = ()=>{
		
		this.setState({
			data: this.state.data,
			open: this.state.open == ''? 'active' : ''
		})
		
	}
	
	_handleSubmit = (e)=>{
		
		e.preventDefault();
		
		const urlImage = document.querySelector('#url-image').value;
		
		const phone = document.querySelector('#phone').value;
		
		axios.get(API.Profile.edit+'?token='+token+'&url='+urlImage+'&phone='+phone)
		.then(response =>{
			console.log(response.data)
			if(response.data.code == '10'){
				window.location = '/profile';
			}
		})
		.catch(err =>{
			console.error(err);
		})
		
	}
	
	render(){
		
		const { open } = this.state;
		
		return(
			<div>
			<div className="profile--edit-link">
					<a className="link" onClick={this._handleModal}>Editar</a>
				</div>
				<div className={"profile--modal-edit "+open}>
					<FaRegWindowMinimize className="cross-modal-profile" onClick={this._handleModal}/>
					<form onSubmit={this._handleSubmit}>
						<div>
							<label>Url Imágen</label>
							<input id="url-image" autocomplete="off" />
						</div>
						<div>
							<label>Teléfono</label>
							<input id="phone" autocomplete="off" />
						</div>
						<div>
							<button>Guardar</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
	
}

export default BtnEditProfile;