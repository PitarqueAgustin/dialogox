//React
import React, { Component } from 'react';

//Styles
import '../css/notification.css';

//axios
import axios from 'axios';

//Api-Routes
import { API } from '../helper/routes';

const token = window.localStorage.getItem('token');

class Notifications extends Component{

	state={
		data: []
	}
	
	componentDidMount = ()=>{
		
		axios.get(API.Notifications.getForToken+'?token='+token)
			.then(response =>{
				this.setState({
					data: response.data
				})
			})
			.catch(err => console.error(err))
		
	}
	
	render(){
		
		const { data } = this.state;
		
		return(
			<div className="box--notifications">
				{
						data.map((notif,i) =>(
						
							<div key={i}>
								<span><b>{notif.NameUserLike}</b> le ha dado like a tu publicación.</span>
								<img src={notif.Image} />
							</div>
							
						))
				}
			</div>
		);
	}
}

export default Notifications;
