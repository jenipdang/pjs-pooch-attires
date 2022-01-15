import React from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import '../css/NavBar.css';

const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">PJ'S POOCH ATTIRES</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/products">Products</Nav.Link>
						<Nav.Link href="/account">
							<BsPerson />
						</Nav.Link>
						<Nav.Link href="/cart">
							<RiShoppingBagLine />
						</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="light">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
