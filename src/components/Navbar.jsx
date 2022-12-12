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
					<NavLink className="brand mt-2" to="/">Anaïs Choquet</NavLink>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="navbar-nav mt-2 ms-auto">
							<Nav.Item class="nav-item">
								<NavLink class="nav-link" to="/About">About</NavLink>
							</Nav.Item>
							<Nav.Item class="nav-item">
								<NavLink class="nav-link" to="/Works">Portfolio</NavLink>
							</Nav.Item>
							<Nav.Item class="nav-item">
								<NavLink class="nav-link" to="/Contact">Contact</NavLink>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavbarExpand;