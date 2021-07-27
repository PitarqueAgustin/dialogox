//React
import React, { Component } from 'react';

//axios
import axios from 'axios';

//Icons
import { 
	FaHome,
	FaListUl,
	FaSearch
} from 'react-icons/fa';

//Components
import BtnMenu from './btn-menu';

//Router
import { Link } from 'react-router-dom';

const API = 'http://localhost/api-dialogox/Profile/getForName.php';

const TOKEN = window.localStorage.getItem('token');

class Navbar extends Component{
	
	state ={
		users: []
	}

	_handleSearch = async(e)=>{
		let box = document.querySelector('#box-profiles');		
		if(e.target.value != ''){
		
			await axios.get(API+'?token='+TOKEN+'&text='+e.target.value)
				.then(response => {
					console.log(response.data)
					if(response.data.length > 0){
						this.setState({
							users: response.data
						})
						
						box.classList.add('active');
					}else{
						box.classList.remove('active');					
					}
				})
				.catch(err => console.error(err))
		}else{
			this.setState({
				users: []
			})

			box.classList.remove('active');
		}
	}

	render(){
		
		const { users } = this.state;
		
		return(
			<div className="box">
				<Link to="/home">
					<FaHome className="icon-xl" />
				</Link>
				<form>
					<div className="search-bar">
						<FaSearch className="icon" />
						<input onChange={this._handleSearch} />
						<div id="box-profiles" className="search-bar--profiles">
						{
							users.map((user,i) => (
								<div key={user.Id}>
									<img src={user.Imagen} />
									<span>{user.Nombre}</span>
								</div>									
							))														
						}						
						</div>
					</div>
				</form>
				<BtnMenu />
			</div>
		);
	}
	
}
export default Navbar; 