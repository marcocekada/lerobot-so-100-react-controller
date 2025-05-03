import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Image } from 'react-bootstrap';


export default function About() {

    return (
        <>
            <Helmet>
                <title>About Us</title>
                <meta name="description" content="" />
            </Helmet>


            <Container fluid className='d-flex justift-content-center align-items-center' style={{ paddingTop: 130 }}>
                <Container fluid='lg' className='text-center'>
                    <h3>About</h3>
                </Container>
            </Container>


    
        </>
    );
};