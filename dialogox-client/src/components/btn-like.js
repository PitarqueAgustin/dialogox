//React
import React, { Component } from 'react';

//Axios
import axios from 'axios';

//Icons
import {
	FaHeart
} from 'react-icons/fa';

const API = 'http://localhost/dialogox/api-dialogox/Publications/like.php';

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
		await axios.get(API+'?get=0&token='+token+'&publicationid='+this.props.id)
			.then(response => {
				console.log(response.data)
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
			
			console.log(this.state.state)
	}
	
	_handleLike = async()=>{
		
		const {state} = this.state;
		
		if(state == 'like'){
			await axios.get(API+'?del=0&token='+token+'&publicationid='+this.props.id)
				.then(response => console.log(response.data))
				.catch(err => console.error(err))
		}else{
			await axios.get(API+'?ins=0&token='+token+'&publicationid='+this.props.id)
				.then(response => console.log(response.data))
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