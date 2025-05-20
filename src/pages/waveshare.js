import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import waveshareLogo from '../assets/waveshare.svg';


export default function Waveshare() {

    return (
        <>
            <Helmet>
                <title>Waveshare</title>
                <meta name="description" content="" />
            </Helmet>


            <Container fluid style={{ paddingTop: 130 }}>
                <Container fluid='lg' className='text-start'>
                    <h1>Waveshare</h1>
                    <Image src={waveshareLogo} width={300} />
                </Container>
            </Container>
        </>
    );
};