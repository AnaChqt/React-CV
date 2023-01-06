import React from 'react';
// CSS
import './WorkDisplay.css';
// Bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap';
// Route
import { useParams } from 'react-router-dom';
// Data
import { projectsList } from '../../data/DataPortfolio';


const WorkDisplay = () => {
    const { id } = useParams();
    const project = projectsList[id]
    
    return (
        <>
            <Container fluid className="d-flex justify-content-center text-center bg">
                <Row>
                    <h2 className="mb-5">{ project.title }</h2>
                    <h5>{ project.category }</h5>
                </Row>
            </Container>

            <Container fluid className="my-5 d-flex justify-content-center text-center">
                <Row className="d-flex">
                    <Col xs={12} lg={7} className="d-flex justify-content-center align-items-center ">
                        <img className="display" src={ project.first_display } alt={ project.title } />
                    </Col> 

					<Col xs={12} lg={5} className="text-center ">
                        <p className="p-3">{ project.description1 }</p>
                        <p className="p-3">{ project.description2 }</p>
					</Col>
                </Row>
            </Container>

            <Container fluid className="my-5 d-flex justify-content-center text-center">
                <Row className="mt-5 d-flex justify-content-center align-items-center">
                    <h3 className='mb-3'>Version Responsive</h3>
                    <img className="responsive" src={ project.responsive } alt={ project.title } />
                    <div className="text-center py-5">
						<a href={ project.demo } target="_blank" rel="noopener noreferrer" ><Button className="btnCV" type="submit">Découvrir le projet</Button></a>                
					</div>
                </Row>
            </Container>
        </>
    );
};

export default WorkDisplay;