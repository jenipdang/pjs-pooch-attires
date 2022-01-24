import React, { useEffect } from 'react';
import Signin from './Signin';
import {useState} from 'react';
import Register from './Register';



const Account = () => {
	const [ user, setUser ] = useState([])

	useEffect(() => {

	}, [])

	const handleAddNewUser = (newUser) => {
		return setUser([...user, newUser])
	}
	return (
		<div>
				<Signin />
				<Register handleAddNewUser={handleAddNewUser}/>
		</div>
	);
};

export default Account;
