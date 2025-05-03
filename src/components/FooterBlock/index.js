import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import arduinoLogo from '../../assets/arduino.svg';
import reactLogo from '../../assets/react.svg';
import lerobotLogo from '../../assets/leRobot.png';



export default function FooterBlock() {


    return (
        <Container fluid className='text-white' id="footer">
            <Container fluid='lg' className='mt-5'>
                <Row>
                    <Col xs={12} md={12} lg={4}>
                        <div className='py-4'>
                            <p>Powered by:</p>

                            <Table className="text-center small">
                                <tbody>
                                    <tr>
                                        <td>
                                            <Image src={arduinoLogo} height={50} />
                                        </td>
                                        <td>
                                            <Image src={reactLogo} height={50} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <Image src={lerobotLogo} height={50} />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={4}>
                        <div className='py-4'>
                            <p>Links</p>
                            <ul>
                                <li><a className="link-light" href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank">SO-ARM100 - Repo</a></li>
                                <li><a className="link-light" href="https://github.com/huggingface/lerobot" target="_blank">HuggingFace LeRobot - Repo</a></li>
                                <li><a className="link-light" href="https://www.waveshare.com/wiki/ST3215_Servo" target="_blank">Waveshare ST3215 Servo</a></li>
                                <li><a className="link-light" href="https://www.waveshare.com/wiki/Bus_Servo_Adapter_(A)" target="_blank">Waveshare Bus Servo Adapter</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={4}>
                        <div className='py-4'>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid='lg' className='mt-5'>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <div className='text-center small text-secondary'>
                            <p>
                                Made by Marco Cekada with love <FontAwesomeIcon icon="heart" className='ms-2' color='red' />
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};