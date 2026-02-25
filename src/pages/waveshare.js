import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import waveshareLogo from '../assets/waveshare.svg';
import waveshareBus from '../assets/Bus_Servo_Adapter_(A).jpg';
import ST3215Servo from '../assets/ST3215_Servo.png';
import waveshareEsp32 from '../assets/servo-driver-with-esp32-1.jpg';


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
                    <Image src={waveshareLogo} width={200} />
                    <Row className='mt-4'>
                        <Col xs={12} md={6} lg={4} className='mb-4'>
                            <Card>
                                <Card.Body>
                                    <Image src={waveshareBus} height={'200'} />
                                    <h5>Bus Servo Adapter (A)</h5>
                                    <a href="https://www.waveshare.com/wiki/Bus_Servo_Adapter_(A)" target="_blank">Link wiki</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={4} className='mb-4'>
                            <Card>
                                <Card.Body>
                                    <Image src={waveshareEsp32} height={'200'} />
                                    <h5>Servo Driver with ESP32</h5>
                                    <a href="https://www.waveshare.com/wiki/Servo_Driver_with_ESP32" target="_blank">Link wiki</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={4} className='mb-4'>
                            <Card>
                                <Card.Body>
                                    <Image src={ST3215Servo} height={'200'} />
                                    <h5>ST3215 Servo</h5>
                                    <a href="https://www.waveshare.com/wiki/ST3215_Servo" target="_blank">Link wiki</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};