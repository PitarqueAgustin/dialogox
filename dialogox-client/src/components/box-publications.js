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
		data: []
	}
	
	async componentDidMount(){
		await axios.get(API.Publications.getAll)
		.then(response =>{
			console.log(response.data)
			this.setState({
				data: response.data
			})
			console.log(this.state.data)
		})
		.catch(err => console.error(err))
	}
	
	render(){
		
		const { data, profile } = this.state;
		
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
			</div>
		);
	}
	
}

export default BoxPublications;