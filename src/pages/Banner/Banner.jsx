import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import "./Banner.css";
import { FaArrowLeft } from 'react-icons/fa';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Banner = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='banner'>
            <Container className="position-relative">
                <div className='d-lg-none'>
                    <div className='d-flex justify-content-between' style={{ "paddingTop": "20px" }}>
                        <div className="text-white" style={{ "cursor": "pointer" }}><FaArrowLeft /></div>
                        <div>
                            <Button onClick={handleShow} variant="outline-primary" className='text-white'>Join Group</Button>
                        </div>
                    </div>
                </div>
                <div className='text-white position-absolute' style={{ "marginTop": "240px" }}>
                    <h2>Computer Engineering</h2>
                    <p>142, 765 Computer Engineers follow this</p>
                </div>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</Modal.Title> */}
                    {/* <small style={{ "color": "#008A45" }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</small> */}
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex justify-content-between'>
                        <h3 className="fs-6 fw-bold w-50">Please Sign In</h3>
                        <p className='w-50 ms-5'>Already have account? <a href="/"> Login</a></p>
                    </div>
                    <div className="lg-d-flex">
                        <div className='lg-w-50'>
                            <Form>
                                {/* <Modal.title>Please Sign Up</Modal.title> */}
                                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                                    {/* <Form.Label>Email</Form.Label> */}
                                    <Form.Control
                                        type="email"
                                        className='rounded-0'
                                        placeholder="email"
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    {/* <Form.Label>Password</Form.Label> */}
                                    <Form.Control
                                        type="password"
                                        className='rounded-0'
                                        placeholder="password"
                                        autoFocus
                                    />
                                </Form.Group>
                                <button className='btn w-100' style={{ "borderRadius": "20px", "background": "#2F6CE5", "color": "white" }}>Create Account</button>
                            </Form>
                            <button className='btn w-100 border mt-4' style={{}}><FcGoogle /> Sign In With Google</button>
                            <button className='btn w-100 border mt-2' style={{}}><FaFacebook /> Sign In With Facebook</button>
                            <button className='btn w-100 mt-2' style={{}}><a href="/">Forgotten Password</a></button>
                        </div>
                        <div className='lg-w-50'>
                            <img style={{ "width": "100%" }} src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=826&t=st=1669380096~exp=1669380696~hmac=73d75aa711b209da398b54af467d67d98ba37fbc5a3f7564e364e609975f669c" alt="" />
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    );
};

export default Banner;