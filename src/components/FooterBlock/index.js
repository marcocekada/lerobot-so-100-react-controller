import React, { useState, useEffect } from 'react';
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';



export default function FooterBlock() {


    return (
        <Container fluid className='text-white' id="footer">
            <Container fluid='lg' className='mt-5'>
                <Row>
                    <Col xs={12} md={12} lg={3}>
                        <div className='pb-4'>
                            
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={3}>
                        <div className='pb-4'>
                            
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={1}></Col>
                    <Col xs={12} md={12} lg={5}>
                        <div className='pb-4'>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid='lg' className='mt-5'>
                <Row>
                    <Col xs={12} md={12} lg={6}>
                        <div className='text-start small'>
                            <p>
                                © 2025 | Marco Cekada
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <div className='text-end small'>
                            <p>
                                Made by love <FontAwesomeIcon icon="heart" className='ms-2' color='red' />
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};