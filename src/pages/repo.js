import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Repo() {

    return (
        <>
            <Helmet>
                <title>Repository</title>
                <meta name="description" content="" />
            </Helmet>


            <Container fluid style={{ paddingTop: 130 }}>
                <Container fluid='lg' className='text-start'>
                    <h1 className='mb-5'>Repository</h1>
                    <p>
                        SO-ARM100 / TheRobotStudio Repo: 
                        <FontAwesomeIcon icon="arrow-right" className='ms-2 me-2' color='blue' /> 
                        <a className="link-primary" href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank">Github</a>
                    </p>
                    <p>
                        Huggingface / Lerobot: 
                        <FontAwesomeIcon icon="arrow-right" className='ms-2 me-2' color='blue' /> 
                        <a className="link-primary" href="https://github.com/huggingface/lerobot" target="_blank">Github</a>
                    </p>
                </Container>
            </Container>
        </>
    );
};