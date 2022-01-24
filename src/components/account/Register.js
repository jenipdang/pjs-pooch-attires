import styled from 'styled-components';
import { useState } from 'react';
// import { useHistory } from 'react-router-dom'

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: #28282b;
	color: white;
	cursor: pointer;
`;

const Register = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefaul();
		const inputs = [firstName, lastName, username, email, password];
		const bool = inputs.some((element) => element.trim() === '');
		if (!bool) {
			alert('You must fill out all the input fields!');
			return null;
		} else {
			const newUser = { firstName, lastName, username, email, password };

			fetch('http://localhost:3001/users', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(newUser),
			});

			setFirstName('');
			setLastName('');
			setUsername('');
			setEmail('');
			setPassword('');
			// history.push('/products')
		}

		// fetch('http://localhost:3001/users', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-type': 'application/json',
		// 		Accept: 'application/json',
		// 	},
		// 	body: JSON.stringify(newUser),
		// })
		// 	.then((r) => r.json())
		// 	.then(handleAddNewUser)
		// 	.catch((err) => {
		// 		console.err('Error:', err);
		// 	});
	};

	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form onSubmit={handleSubmit}>
					<Input
						type="text"
						onChange={(e) => setFirstName(e.target.value)}
						value={firstName}
						lable="firstName"
						placeholder="First Name"
						name="firstName"
					/>
					<Input
						type="text"
						onChange={(e) => setLastName(e.target.value)}
						value={lastName}
						lable="lastName"
						placeholder="Last Name"
						name="lastName"
					/>
					<Input
						type="text"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						lable="username"
						placeholder="username"
						name="username"
					/>
					<Input
						type="emial"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						lable="email"
						placeholder="email"
						name="email"
					/>
					<Input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						lable="password"
						placeholder="password"
						name="password"
					/>
					<Agreement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button type="submit" value="Create">
						CREATE
					</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
