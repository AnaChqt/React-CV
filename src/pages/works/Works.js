import React from 'react';
import './Works.css';
import { Container, Row } from 'react-bootstrap';
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