import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';


export default function CookiePolicy() {

    return (
        <>
            <Helmet>
                <title>Cookie Policy</title>
                <meta name="description" content="" />
            </Helmet>


            <Container fluid style={{ paddingTop: 150 }}>
                <Container fluid='lg' className='text-white text-start'>
                    <h1>Policy</h1>

                </Container>
            </Container>
        </>
    );
};