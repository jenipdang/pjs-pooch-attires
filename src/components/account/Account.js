import React, { useEffect } from 'react';
import Signin from './Signin';
import {useState} from 'react';
import Register from './Register';



const Account = () => {
	const [ user, setUser ] = useState([])

	useEffect(() => {
		fetch('http://localhost:3001/users')
		.then (r => r.json())
		.then ((userData) => {
			setUser(userData)
		}).catch((err) =>
		alert(err))
	}, [])

	const handleAddNewUser = (addNewUser) => {
		return setUser([...user, addNewUser])
	}
	
	return (
		<div>
				<Signin user={user}/>
				<Register handleAddNewUser={handleAddNewUser}/>
		</div>
	);
};

export default Account;
