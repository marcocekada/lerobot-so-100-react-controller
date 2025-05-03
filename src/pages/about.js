import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';


export default function About() {

    return (
        <>
            <Helmet>
                <title>About</title>
                <meta name="description" content="" />
            </Helmet>


            <Container fluid style={{ paddingTop: 130 }}>
                <Container fluid='lg' className='text-start'>
                    <h1>About the project</h1>
                    <p className='lead'>
                        My main goal is to controll lerobot SO-100 by a web application made in react js. I decided to build only one arm so I will not have leader and follower as described in the <a href="https://github.com/huggingface/lerobot" target="_blank">Huggingface repo</a>.
                    </p>
                    <Row className='mt-5'>
                        <Col xs={12} md={6} className='mb-3'>
                            <Card>
                                <Card.Header>
                                    Parts for my arm
                                </Card.Header>
                                <Card.Body>
                                    <Table striped className='small'>
                                        <thead>
                                            <tr>
                                                <th>Description</th>
                                                <th>Qty</th>
                                                <th>Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Waveshare 30KG Serial Bus Servo</td>
                                                <td>6</td>
                                                <td><a href="https://www.amazon.it/dp/B0B6HSBRGF?ref=fed_asin_title" target="_blank">Amazon</a></td>
                                            </tr>
                                            <tr>
                                                <td>Motor control board</td>
                                                <td>1</td>
                                                <td><a href="https://www.amazon.it/dp/B0DK79JNNK?ref=fed_asin_title" target="_blank">Amazon</a></td>
                                            </tr>
                                            <tr>
                                                <td>USB-C Cable</td>
                                                <td>1</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Power supply</td>
                                                <td>1</td>
                                                <td><a href="https://www.amazon.it/dp/B01HRR9GY4?ref=fed_asin_title" target="_blank">Amazon</a></td>
                                            </tr>
                                            <tr>
                                                <td>Table clamp</td>
                                                <td>2</td>
                                                <td><a href="https://www.amazon.it/dp/B001DZQ3HA?ref=fed_asin_title&th=1" target="_blank">Amazon</a></td>
                                            </tr>
                                            <tr>
                                                <td>Printed components</td>
                                                <td>1</td>
                                                <td><a href="https://github.com/TheRobotStudio/SO-ARM100?tab=readme-ov-file#printing-the-parts" target="_blank">Github</a></td>
                                            </tr>
                                            <tr>
                                                <td>UVC camera</td>
                                                <td>1</td>
                                                <td><a href="https://www.amazon.it/dp/B0CNCSFQC1?ref=fed_asin_title" target="_blank">Amazon</a></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};