//React
import React, { Component } from 'react';

//Axios
import axios from 'axios';

//Icons
import {
	FaHeart
} from 'react-icons/fa';

//Api-Routes
import { API } from '../helper/routes';

const token = window.localStorage.getItem('token');

class BtnLike extends Component{
	
	constructor(props){
		super(props);
	}
	
	state={
		state:''
	}
	
	componentDidMount(){
		this._getState();
	}
	
	_getState = async()=>{
		await axios.get(API.Publications.like+'?get=0&token='+token+'&publicationid='+this.props.id)
			.then(response => {
				if(response.data.Result == 'Ok'){
					this.setState({
						state: 'like' 
					})
				}
				
				if(response.data.Result == 'Err'){
					this.setState({
						state: '' 
					})
				}
			})
			.catch(err => console.error(err))
			
	}
	
	_handleLike = async()=>{
		
		const {state} = this.state;
		
		if(state == 'like'){
			await axios.get(API.Publications.like+'?del=0&token='+token+'&publicationid='+this.props.id)
				.then(response => {})
				.catch(err => console.error(err))
		}else{
			await axios.get(API.Publications.like+'?ins=0&token='+token+'&publicationid='+this.props.id)
				.then(response => {})
				.catch(err => console.error(err))
		}
		
		this._getState();

	}
	
	render(){
		
		const { state } = this.state;
		
		return(
			<FaHeart className={"icons "+ state} onClick={this._handleLike}/>
		);
	}
	
}

export default BtnLike;