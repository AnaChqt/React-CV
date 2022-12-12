import React from 'react';
// CSS
import './Works.css';
// Bootstrap
import { Container, Row } from 'react-bootstrap';
// Page
import Portfolio from '../../components/Portfolio';

const Works = () => {
	return (
		<>
			<Container fluid className="container-fluid box mb-5">
				<Row className="d-flex mb-5">
					<Portfolio />
				</Row>
			</Container>
		</>
	);
};

export default Works;