//React
import React, { useEffect } from 'react';

//Styles
import '../css/profile.css';

//Components
import Navbar from '../components/navbar';
import ImageProfile from '../components/image-profile';
import DescriptionProfile from '../components/description-profile';
import BtnEditProfile from '../components/btn-edit-profile';

//VerifyToken
import { verifyToken } from '../helper/verify';

export default function Profile(){
	
	useEffect(() => {
		verifyToken();
	});
	
	return(
		<div>
			<Navbar />
			<ImageProfile />
			<DescriptionProfile />
			<BtnEditProfile />
		</div>
	);
}
