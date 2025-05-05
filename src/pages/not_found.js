import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Container, Button, Image } from 'react-bootstrap';
import robotBroken from '../assets/robot-broken.svg';


export default function NotFound() {

    return (
        <>
            <Helmet>
                <title>Page not found</title>
                <meta name="description" content="" />
            </Helmet>


            <Container fluid style={{ paddingTop: 130, minHeight: '60vh' }}>
                <Container fluid='lg' className='text-start'>
                    <h1>Page not found.</h1>
                    <p className='lead'>
                        I'm sorry the page you requested cannot be found.
                        <br/>
                        The URL may be mispelled or the page you're looking for is no longer available.
                    </p>
                    <Link to='/'>
                        <Button size='lg' variant='dark' style={{ minWidth: 300 }}>Back to home</Button>
                    </Link>
                    <br/>
                    <Image src={robotBroken} width={300} className='mt-4' />
                </Container>
            </Container>
        </>
    );
};