import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ArduinoController() {
    const [port, setPort] = useState(null);
    const [writer, setWriter] = useState(null);
    const [connected, setConnected] = useState(false);
    const [log, setLog] = useState([]);
    const [motors, setMotors] = useState(
        [
            { id: 1, name: 'shoulder_pan', label: 'Motor 1', max_position: 2700, min_position: 1250, position: 1500 },
            { id: 2, name: 'shoulder_lift', label: 'Motor 2', max_position: 2700, min_position: 1250, position: 1500 },
            { id: 3, name: 'elbow_flex', label: 'Motor 3', max_position: 2700, min_position: 1250, position: 1500 },
            { id: 4, name: 'wrist_flex', label: 'Motor 4', max_position: 2700, min_position: 1250, position: 1500 },
            { id: 5, name: 'wrist_roll', label: 'Motor 5', max_position: 2700, min_position: 1250, position: 1500 },
            { id: 6, name: 'gripper', label: 'Motor 6', max_position: 2700, min_position: 1250, position: 1500 }
        ]
    );
    const [selectedMotor, setSelectedMotor] = useState(0);
    const [pad, setPad] = useState(0);

    const logMessage = msg => setLog(prev => [...prev, `${new Date().toLocaleTimeString()}: ${msg}`]);

    const connect = async () => {
        try {
            const p = await navigator.serial.requestPort();
            await p.open({ baudRate: 9600 });
            const w = p.writable.getWriter();
            setPort(p);
            setWriter(w);
            setConnected(true);
            logMessage('Connected to Arduino');
        } catch (err) {
            console.error(err);
            logMessage('Connection failed');
        }
    };

    const send = async data => {
        if (!writer) {
            logMessage('Not connected');
            return;
        }
        const encoder = new TextEncoder();
        await writer.write(encoder.encode(data));
        logMessage(`Sent: ${data}`);
    };

    const handleMotorChange = (index, field, value) => {
        setMotors(prev => {
            const arr = [...prev];
            arr[index] = { ...arr[index], [field]: value };
            return arr;
        });
    };

    const handlePadChange = (value) => {
        setMotors(prev => {
            const arr = [...prev];
            arr[selectedMotor] = { ...arr[selectedMotor], ['position']: value };
            return arr;
        });
        //send(`M${selectedMotor}:D${value}`);
    };

    return (
        <Container className="p-4">
            <Row className="mb-3">
                <Col>
                    {connected ? (
                        <Button variant="success" disabled>
                            <FontAwesomeIcon icon={"sync-alt"} spin /> Connected
                        </Button>
                    ) : (
                        <Button variant="primary" onClick={connect}>
                            <FontAwesomeIcon icon={"plug"} /> Connect to Arduino
                        </Button>
                    )}
                </Col>
            </Row>

            <Row>
                <Col md={8}>
                    <Card className="mb-3">
                        <Card.Header>Motor Configuration</Card.Header>
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col sm={4}>
                                    Name
                                </Col>
                                <Col sm={4}>
                                    Range
                                </Col>
                                <Col sm={4}>
                                    Position
                                </Col>
                            </Row>
                            {motors.map((motor, i) => (
                                <Form key={i} className="mb-2">
                                    <Row className="align-items-center">
                                        <Col sm={4}>
                                            <Form.Control
                                                type="text"
                                                value={motor.name}
                                                onChange={e => handleMotorChange(i, 'name', e.target.value)}
                                                placeholder={`Motor ${i + 1} Name`}
                                            />
                                        </Col>
                                        <Col sm={4}>
                                            <InputGroup>
                                                <Form.Control
                                                    type="number"
                                                    value={motor.min_position}
                                                    onChange={e => handleMotorChange(i, 'min_position', parseInt(e.target.value))}
                                                    placeholder="Min position"
                                                />
                                                <Form.Control
                                                    type="number"
                                                    value={motor.max_position}
                                                    onChange={e => handleMotorChange(i, 'max_position', parseInt(e.target.value))}
                                                    placeholder="Max position"
                                                />
                                            </InputGroup>
                                        </Col>
                                        <Col sm={4}>
                                            <InputGroup>
                                                <Form.Control
                                                    type="number"
                                                    disabled
                                                    value={motor.position}
                                                    placeholder="Position"
                                                />
                                                <Button variant="outline-success" onClick={() => send()}>
                                                    Send
                                                </Button>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            ))}
                        </Card.Body>
                    </Card>

                    <Card className="mb-3">
                        <Card.Header>Pad Control</Card.Header>
                        <Card.Body>
                            <Form className="mb-3">
                                <Form.Group controlId="selectMotor">
                                    <Form.Label>Select Motor</Form.Label>
                                    <Form.Select
                                        value={selectedMotor}
                                        onChange={e => setSelectedMotor(parseInt(e.target.value))}
                                    >
                                        {motors.map((motor, i) => (
                                            <option key={i} value={i}>
                                                {motor.name}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Move</Form.Label>
                                    <Form.Control
                                        type="range"
                                        value={motors[selectedMotor].position}
                                        min={motors[selectedMotor].min_position}
                                        max={motors[selectedMotor].max_position}
                                        onChange={e => handlePadChange(parseInt(e.target.value))}
                                    />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Header>Log</Card.Header>
                        <Card.Body style={{ maxHeight: '300px', overflowY: 'auto' }}>
                            {log.map((entry, i) => (
                                <div key={i}>{entry}</div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}