import React from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import '../css/NavBar.css'

const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">PJ'S POOCH ATTIRES</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#features">Features</Nav.Link>
						<NavDropdown title="Products" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Bandana</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Bow Tie
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Coat</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Order Status
							</NavDropdown.Item>
						</NavDropdown>
							<Nav.Link href="#cart">
								<RiShoppingBagLine />
							</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
