import React from "react";
// CSS
import "./Contact.css";
// Bootstrap
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// React-hook-form
import { useForm } from 'react-hook-form';
// Yup
import * as yup from 'yup';
// Resolver
import { yupResolver } from '@hookform/resolvers/yup'
// EmailJS
import emailjs from "emailjs-com"

function Contact() {
    const contactSchema = yup.object().shape({
        lastname: yup.string().required("Champ obligatoire"),
        firstname: yup.string().required("Champ obligatoire"),
        email: yup.string().email("Email invalide").required("Champ obligatoire"),
        subject: yup.string().required("Champ obligatoire"),
        message: yup.string().required("Champ obligatoire"),
    });

    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        resolver: yupResolver(contactSchema),
    });

    const onSubmit = (formData) => {
        emailjs
        .send("service_nc8reol", "template_bwb8inz", formData, "OJQZtzeGeFfGqv75V")
        .then(
            () => {
                alert('Votre message a bien été envoyé !');
                window.location.reload(false);
            },
            () => {
                alert('Une erreur est survenue, veuillez réessayer');
            }
        );
        reset();
    };

    return (
        <>
            <Container className="min-vh-75 box mb-5">
                <Row className="d-flex">
                    <Col xs={12} lg={5} className="mb-5">
                        <div className="text-center">
                            <h1 className='mb-3'>Contact Me</h1>
                            <p className='pb-3'>Si mon profil vous intéresse, n'hésitez pas à me contacter via le formulaire, je serai ravie d'échanger avec vous.</p>
                        </div>
                        <Form onSubmit={handleSubmit(onSubmit)} className='contact__form rounded'>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridLastname">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Nom" 
                                        {...register("lastname")}
                                    />
                                    <p className="mt-3 text-danger fs-6" >{errors.lastname?.message}</p>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridFirstname">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Prénom" 
                                        {...register("firstname")}
                                    />
                                    <p className="mt-3 text-danger fs-6" >{errors.firstname?.message}</p>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="formGridEmail">
                                <Form.Control 
                                    type="email"
                                    placeholder="name@example.com" 
                                    {...register("email")}
                                />
                                <p className="mt-3 text-danger fs-6" >{errors.email?.message}</p>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridSubject">
                                <Form.Control 
                                    type="text"
                                    name="Subject"
                                    placeholder="Sujet" 
                                    {...register("subject")}
                                />
                                <p className="mt-3 text-danger fs-6" >{errors.subject?.message}</p>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridMessage">
                                <Form.Control 
                                    as="textarea" 
                                    rows="5"
                                    {...register("message")}
                                />
                                <p className="mt-3 text-danger fs-6" >{errors.message?.message}</p>
                            </Form.Group>
                            <div className="text-center">
                                <Button className="contact__btn" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Col>
                    <Col xs={12} lg={7} className="d-flex align-items-center justify-content-center">
                        <div className="contact__map ratio ratio-16x9">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5140.695492240445!2d2.2938851274035073!3d49.8922743676087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e784474c73815d%3A0x7fd7f26f278f7bae!2sCtre%20Ville%2C%2080000%20Amiens!5e0!3m2!1sfr!2sfr!4v1670511403490!5m2!1sfr!2sfr" 
                                title="map"
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"
                            >
                            </iframe>
                        </div>
                    </Col> 
                </Row>
            </Container>
        </>
    )
}

export default Contact