//React
import React, { Component } from 'react';

//Axios
import axios from 'axios';

//Components
import Publication from './publication';

//Api-Routes
import { API } from '../api-routes/routes';

class BoxPublications extends Component{
	
	state ={
		data: [],
		all: false
	}
	
	async componentDidMount(){
		
		const { all } = this.state;
		
		await axios.get(API.Publications.getAll+'?all='+all)
		.then(response =>{
			this.setState({
				data: response.data
			})
			console.log(this.state.data)
		})
		.catch(err => console.error(err))
	}
	
	_handlerLimitPublications = async()=>{

		const allChanged = !this.state.all;
		
		await axios.get(API.Publications.getAll+'?all='+allChanged)
		.then(response =>{
			this.setState({
				data: response.data,
				all: allChanged
			})
			console.log(this.state.data)
		})
		.catch(err => console.error(err))	
		
	}
	
	render(){
		
		const { data, all } = this.state;
		
		return(
			<div className="container row-gap">
				{data.map((item,i) => (
					<Publication
						key={i}
						id={item.Id}
						title={item.Title}
						description={item.Description}
						src={item.Image}
						date={item.Date}
						state={""}
						name={item.UserName}
						image={item.ImageProfile}
					/>
				))}
				<a className="link text-center" onClick={this._handlerLimitPublications}>{all? 'Ver menos' : 'Ver más'}</a>
			</div>
		);
	}
	
}

export default BoxPublications;