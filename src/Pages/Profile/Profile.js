import React from 'react';
// STYLE
import './Profile.css';

// COMPONENTS
import Navbar from '../../Components/Navbar/Navbar'
import LeftPanel from '../../Components/Profile/LeftPanel/LeftPanel';
import NavCategories from '../../Components/Profile//NavCategories/NavCategories';
import CategorySliderCategory from '../../Components/Profile/CategorySliderCategory/CategorySliderCategory'
const Profile = () => {
	return (
		<div className='Profile '>
			<Navbar/>
			<div className='Profile-grid lg-container'>
				<div className='LeftPanel'>
					<LeftPanel />
				</div>
				<div className='RightPanel'>
					<NavCategories />
					<CategorySliderCategory />
				</div>
			</div>
		</div>
	);
};

export default Profile;
