import React from 'react';
// CSS
import './WorkDisplay.css';
// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
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
                <Row>
                    <Col xs={12} lg={6}>
                        <h3>{ project.title }</h3>
                    </Col>
                    <Col xs={12} lg={6}>
                        <h3>{ project.description1 }</h3>
                    </Col>
                    <Col xs={12} lg={6}>
                        <h3>{ project.title }</h3>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default WorkDisplay;