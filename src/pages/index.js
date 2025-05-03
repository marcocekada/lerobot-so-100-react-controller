import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Container, Image, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Home() {


    return (
        <>
            <Helmet>
                <title>Lerobot - React - Controller</title>
                <meta name="description" content="" />
            </Helmet>



            <Container fluid className='d-flex justift-content-center align-items-center' style={{ paddingTop: 130, minHeight: '50vh' }} id="hero-home">
                <Container fluid='lg' className='text-center'>
                    
                </Container>
            </Container>
        </>
    )

};