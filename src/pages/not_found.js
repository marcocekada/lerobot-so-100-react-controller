import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';


export default function NotFound() {

    return (
        <>
            <Helmet>
                <title>Cookie Policy</title>
                <meta name="description" content="" />
            </Helmet>


            <Container fluid style={{ paddingTop: 130, minHeight: '60vh' }}>
                <Container fluid='lg' className='text-start'>
                    <h1>Page not found.</h1>
                    <p></p>
                    <Link to='/'>
                        <Button size='lg'>Back to home</Button>
                    </Link>
                </Container>
            </Container>
        </>
    );
};