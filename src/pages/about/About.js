import React from 'react';
import './About.css';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import profile from '../../assets/profilePicture2.png';

const About = () => {
	return (
		<>
			<Container className="box mb-5">
				<Row className="d-flex mb-5">
					<Col xs={12} lg={5} className="d-flex justify-content-center align-items-center">
						<img src={ profile } alt="My profile picture" className="profil rounded-circle shadow-lg" />
					</Col> 
					<Col xs={12} lg={7} className="text-center px-5 mt-5">
						<div className="biographie">
							<p>Après des études en archéologie, j'ai décidé d'entammer une reconversion dans le numérique et dans la création de sites internet. D'abord en autodidacte, j'ai intégré par la suite une formation "Développement Web et Web Mobile".</p>                      
							<p>Curieuse et passionnée, j'aime apprendre constamment de nouvelles choses. Ayant un intéret en plus pour le design, c'est tout naturellement que je me spécialise dans le développement front et la maitrise de l'UI/UX.</p>
							<p>Autonome de nature, je peux travailler seule ou en groupe et je sais également m'adapter à un environnement que je ne connais pas. L'accessibilité et l'optimisation du code sont mes priorités.</p> 
                        </div>
					</Col>
				</Row>
				<Row>
					<div className="mt-5 text-center">
						<h1 className='mb-5'>Skills</h1>
					</div>
					<Col xs={12} lg={6} className="mb-5">
						<Accordion className="shadow-lg rounded">
							<Accordion.Item eventKey="0" >
								<Accordion.Header >FRONT-END</Accordion.Header>
									<Accordion.Body className="rounded">
										<p className="skills mt-4 text-center">Création et intégration de sites web et applications mobiles responsive, accessibles et répondant aux normes W3C.</p>
										<p className="text-center skills_name fw-bold">HTML5 - CSS3 - JavaScript - ReactJS - Json - Bootstrap</p>
									</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					<Col xs={12} lg={6} className="mb-5">
						<Accordion className="shadow-lg rounded">
							<Accordion.Item eventKey="0">
								<Accordion.Header className="fw-bold">BACK-END</Accordion.Header>
									<Accordion.Body className="rounded">
										<p className="skills mt-4 text-center">Développement de sites web et applications, création et gestion de bases de données, programmation orientée objet.</p>
										<p className="skills_name text-center fw-bold">PHP7 - Symfony5 - SQL</p>
									</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					<Col xs={12} lg={6} className="mb-5">
						<Accordion className="shadow-lg rounded">
							<Accordion.Item eventKey="0">
								<Accordion.Header className="fw-bold">CMS/WEB DESIGN</Accordion.Header>
									<Accordion.Body className="rounded">
										<p className="skills mt-4 text-center">Création et édition de thème Wordpress. Création de maquettes et conception centrée UX.</p>
										<p className="skills_name text-center fw-bold">WordPress - WooCommerce - AdobeXD - Figma - Canva</p>
									</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					<Col xs={12} lg={6}>
						<Accordion className="shadow-lg rounded">
							<Accordion.Item eventKey="0">
								<Accordion.Header className="fw-bold">ENVIRONNEMENT DE TRAVAIL</Accordion.Header>
									<Accordion.Body className="rounded">
										<p className="mt-4 px-3 skills text-center">
											<b className="skills_name">Systèmes d'exploitation :</b> Windows 10, Windows 11 <br/>
											<b className="skills_name">Workflow :</b> Git, Laragon, Chrome, FileZilla <br/>
											<b className="skills_name">IDE :</b> Visual Studio Code <br/>
											<b className="skills_name">Autres compétences :</b> Maîtrise de l'anglais (TOEIC 2018 : 945/990), traduction anglais/français <br/>
											<b className="skills_name">Savoir-être :</b> Créativité, Réactivité, Autonomie, Polyvalence, Curiosité et Travail en équipe
										</p>										
									</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default About;