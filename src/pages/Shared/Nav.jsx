import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Nav.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';

function Navigation() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar bg="light" expand="lg" className="d-none d-lg-block">
                <Container>
                    <Navbar.Brand href="#"><span style={{ "color": "#27A365" }}>ATG</span>.WORLD</Navbar.Brand>
                    <Form style={{"width":"378px"}}>
                        <Form.Control
                            type="search"
                            placeholder="🔍 Search for your favourite in ATG"
                            className="me-2 searchInput w-100"
                            aria-label="Search"
                        />
                    </Form>
                    <Navbar>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={handleShow} className="fw-bold">Create account. <span className="text-decoration-underline text-primary">It's free!</span></Nav.Link>
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</Modal.Title> */}
                    <small style={{ "color": "#008A45" }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</small>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex justify-content-between'>
                        <h3 className="fs-6 fw-bold w-50">Please Sign In</h3>
                        <small className='w-50 ps-3'>Are you new here? <a href="/">create new user</a></small>
                    </div>
                    <div className="d-flex">
                        <div className='w-50'>
                            <Form>
                                {/* <Modal.title>Please Sign Up</Modal.title> */}
                                <Form.Group className="mb-0 d-flex" controlId="exampleForm.ControlInput1">
                                    {/* <Form.Label>Email</Form.Label> */}
                                    <Form.Control
                                        type="text"
                                        className='rounded-0'
                                        placeholder="first name"
                                        autoFocus
                                    />
                                    <Form.Control
                                        type="text"
                                        className='rounded-0'
                                        placeholder="last name"
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                                    {/* <Form.Label>Email</Form.Label> */}
                                    <Form.Control
                                        type="email"
                                        className='rounded-0'
                                        placeholder="email"
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                                    {/* <Form.Label>Email</Form.Label> */}
                                    <Form.Control
                                        type="password"
                                        className='rounded-0'
                                        placeholder="password"
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    {/* <Form.Label>Password</Form.Label> */}
                                    <Form.Control
                                        type="password"
                                        className='rounded-0'
                                        placeholder="confirm password"
                                        autoFocus
                                    />
                                </Form.Group>
                                <button className='btn w-100' style={{ "borderRadius": "20px", "background": "#2F6CE5", "color": "white" }}>Create Account</button>
                            </Form>
                            <button className='btn w-100 border mt-4' style={{}}><FcGoogle /> Sign In With Google</button>
                            <button className='btn w-100 border mt-2' style={{}}><FaFacebook /> Sign In With Facebook</button>
                            <button className='btn w-100 mt-2' style={{}}><a href="/">Forgotten Password</a></button>
                        </div>
                        <div className='w-50'>
                            <img style={{ "width": "100%" }} src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=826&t=st=1669380096~exp=1669380696~hmac=73d75aa711b209da398b54af467d67d98ba37fbc5a3f7564e364e609975f669c" alt="" />
                            <p className='ms-3'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
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

        </>
    );
};
export default Navigation;