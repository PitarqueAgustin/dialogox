//React
import React, { Component } from 'react';

//Styles
import '../css/profile.css';

//Components
import Navbar from '../components/navbar';
import ImageProfile from '../components/image-profile';
import DescriptionProfile from '../components/description-profile';
import BtnEditProfile from '../components/btn-edit-profile';

export default function Profile(){
	return(
		<div>
			<Navbar />
			<ImageProfile />
			<DescriptionProfile />
			<BtnEditProfile />
		</div>
	);
}
