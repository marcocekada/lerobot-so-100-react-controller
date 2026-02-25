import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import CodeEditor from '@uiw/react-textarea-code-editor';
import arduino_connect from '../assets/code/arduino_connect.txt';
import arduino_read from '../assets/code/arduino_read.txt';
import arduino_write from '../assets/code/arduino_write.txt';
import arduino_code from '../assets/code/arduino_code.txt';


export default function Code() {


    const [code1, setCode1] = useState('loading...');
    const [code2, setCode2] = useState('loading...');
    const [code3, setCode3] = useState('loading...');
    const [code4, setCode4] = useState('loading...');

    async function getText(textfile) {
        return fetch(textfile).then((response) => response.text()).then((textContent) => {
            return textContent;
        });
    }


    async function init() {
        var c1 = await getText(arduino_connect)
        var c2 = await getText(arduino_read)
        var c3 = await getText(arduino_write)
        var c4 = await getText(arduino_code)
        setCode1(c1)
        setCode2(c2)
        setCode3(c3)
        setCode4(c4)
    }

    useEffect( () => {
        init()
    }, []);




    return (
        <>
            <Helmet>
                <title>Code</title>
                <meta name="description" content="" />
            </Helmet>


            <Container fluid style={{ paddingTop: 130 }}>
                <Container fluid='lg' className='text-start'>
                    <h1>Coding</h1>
                    <p className='lead'>
                        I used an Arduino Mega to communicate directly from the React.js web app’s interface with the robot.<br />
                        Basically, the goal was to use <code>navigator.serial.requestPort()</code> to connect to the Arduino
                        and send simple commands like <code>M$motor.id:$motor.position</code> which move the appropriate motor to the specified position.
                        <br />
                        All remaining functionality is handled within the web application.
                    </p>

                    <h3 className='mt-5'>React js - connect the Arduino</h3>
                    <CodeEditor
                        value={code1}
                        language="js"
                        placeholder="Please enter JS code."
                        padding={15}
                        style={{
                            backgroundColor: "#f5f5f5",
                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                        }}
                    />

                    <h3 className='mt-5'>React js - read the Arduino</h3>
                    <CodeEditor
                        value={code2}
                        language="js"
                        placeholder="Please enter JS code."
                        padding={15}
                        style={{
                            backgroundColor: "#f5f5f5",
                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                        }}
                    />

                    <h3 className='mt-5'>React js - Write to the Arduino</h3>
                    <CodeEditor
                        value={code3}
                        language="js"
                        placeholder="Please enter JS code."
                        padding={15}
                        style={{
                            backgroundColor: "#f5f5f5",
                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                        }}
                    />

                    <h3 className='mt-5'>Arduino code</h3>
                    <CodeEditor
                        value={code4}
                        language="c"
                        placeholder="Please enter c code."
                        padding={15}
                        style={{
                            backgroundColor: "#f5f5f5",
                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                        }}
                    />
                </Container>
            </Container>
        </>
    );
};