import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Image, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LeRobotController from '../components/LeRobotController';


export default function Home() {


    return (
        <>
            <Helmet>
                <title>Lerobot - React - Controller</title>
                <meta name="description" content="" />
            </Helmet>



            <Container fluid style={{ paddingTop: 130 }}>
                <Container fluid='lg' className='text-start'>
                    <h1>LeRobot SO-100 React js Controller</h1>

                    <Card className='mt-4'>
                        <Card.Body>
                            <LeRobotController />
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </>
    )

};