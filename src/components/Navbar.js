import React from 'react';
// Bootstrap
import { Navbar, Container, Nav } from 'react-bootstrap';
// Router
import { NavLink } from 'react-router-dom';

const NavbarExpand = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="sm" bg="light" className="fixed-top">
				<Container>
					<NavLink className="brand mt-2" to="/React-CV">Anaïs Choquet</NavLink>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="navbar-nav mt-2 ms-auto">
							<Nav.Item class="nav-item">
								<NavLink class="nav-link" to="/about">About</NavLink>
							</Nav.Item>
							<Nav.Item class="nav-item">
								<NavLink class="nav-link" to="/works">Portfolio</NavLink>
							</Nav.Item>
							<Nav.Item class="nav-item">
								<NavLink class="nav-link" to="/contact">Contact</NavLink>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavbarExpand;