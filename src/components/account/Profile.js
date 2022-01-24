import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	let navigate = useNavigate();

	const handleSignout = () => {
		navigate('/account/signin');
	};
	return (
		<div className="container">
			<div className="text ">
				<h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
					Welcome User!
				</h2>
			</div>
			<input className='btn btn-dark m-4' type="button" value="Signout" onClick={handleSignout} />
		</div>
	);
};

export default Profile;
