//React
import React, { Component } from 'react';

//Styles
import '../css/modal-menu.css';

//axios
import axios from 'axios';

//Icons
import { 
	FaListUl,
	FaRegWindowMinimize
} from 'react-icons/fa';

//Router
import {
	Link
} from 'react-router-dom';

//Api-Routes
import { API } from '../helper/routes';

const TOKEN = window.localStorage.getItem('token');

class ModalMenu extends Component{
	
	state = {
		open: ''
	}
	
	_handleModal = ()=>{
		this.setState({
			open: this.state.open == ''? 'active' : ''
		})
	}
	
	_handleCloseSesion = ()=>{
		axios.get(API.Login.close+'?token='+TOKEN)
			.then(response => console.log(response.data))
			.catch(err => console.error(err))
	}
	
	render(){
		
		const { open } = this.state;
		
		return(
			<div>
				<FaListUl className="icon-xl" onClick={this._handleModal} />
				<div className={"modal "+open}>
					<div>
						<FaRegWindowMinimize className="cross-modal" onClick={this._handleModal}/>
					</div>
					<div className="menu">
						<ul>
							<li><Link className="link-menu" to="/home">Inicio</Link></li>
							<li><Link className="link-menu" to="/profile">Perfil</Link></li>
							<li><Link className="link-menu" to="/notifications">Notificaciones</Link></li>
							<li><Link className="link-menu" to="/" onClick={this._handleCloseSesion}>Cerrar Sesión</Link></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default ModalMenu;