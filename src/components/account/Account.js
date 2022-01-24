import React, { useEffect } from 'react';
import Signin from './Signin';
import {useState} from 'react';
import Register from './Register';



const Account = () => {
	const [ data, setData ] = useState({ users: [] })

	const handleAddNewUser = (user) => {
		let users = data["users"]

		fetch('http://localhost:3001/users', {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(user),
		})
		.then((r) => r.json())
		.then((data) => {
			console.log(data)
			users.push(data)
			setData({ users: users })
		})	
	}
	
	return (
		<div>
				<Signin />
				<Register handleAddNewUser={handleAddNewUser}/>
		</div>
	);
};

export default Account;
