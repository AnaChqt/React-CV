import React from 'react';
// CSS
import './Home.css';
// Bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap';
// Images
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import profile from '../../assets/test.png';

const Home = () => {
	return (
		<>
			<Container fluid className="block mb-5">
				<Row className="d-flex">
					<Col xs={12} lg={7} className="text-center">
						<h1 className="mx-1 mt-5">HELLO, WORLD !</h1>
						<p className="biographie mt-4">Je suis Anaïs Choquet, <span className="jobName fw-bold">Front-End Developper</span></p>                       
						<div className="d-flex justify-content-center py-4">
							<a href="https://www.linkedin.com/in/ana%C3%AFs-choquet-00926a158/" target="_blank" rel="noopener noreferrer"><img src={ linkedin } className="social" id="linkedin" alt="logo Linkedin"/></a>
							<a href="https://github.com/AnaChqt" target="_blank" rel="noopener noreferrer"><img src={ github } className="social" id="github" alt="Logo GitHub"/></a>
						</div>
						<div className="text-center py-4">
							<a href="cv.pdf" download="cv.pdf"><Button className="btnCV" type="submit">Telecharger mon CV</Button></a>                
						</div>
					</Col>
					<Col xs={12} lg={5} className="d-flex justify-content-center align-items-center">
						<img src={ profile } alt="add alt" className="profil"/>
					</Col> 
				</Row>
			</Container>
		</>
	);
};

export default Home;