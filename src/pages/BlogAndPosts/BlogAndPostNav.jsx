import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUsers } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


function BlogAndPostNav() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar bg="light" expand="lg" className='d-lg-none'>
                <Container className='d-flex justify-content-between'>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link>Posts(1000)</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown className="rounded me-2 px-2" style={{ "background": "#EDEEF0" }} title="Filter All" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar bg="light" expand="lg" className='d-none d-lg-block'>
                <Container className='d-flex justify-content-between'>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link>All Posts(1000)</Nav.Link>
                        <Nav.Link>Article</Nav.Link>
                        <Nav.Link>Event</Nav.Link>
                        <Nav.Link>Education</Nav.Link>
                        <Nav.Link>Job</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown className="rounded me-2" style={{ "background": "#EDEEF0" }} title="Write a Post" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action2" onClick={handleShow} className='text-white rounded' style={{ "background": "#2F6CE5" }}><FaUsers /> Join Group</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</Modal.Title> */}
                    <small style={{ "color": "#008A45" }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</small>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex justify-content-between'>
                        <h3 className="fs-6 fw-bold w-50">Please Sign In</h3>
                        <p className='w-50 ms-5'>Already have account? <a href="/"> Login</a></p>
                    </div>
                    <div className="d-flex">
                        <div className='w-50'>
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
                                <button className='btn w-100' style={{ "borderRadius": "20px", "background": "#2F6CE5", "color": "white" }}>Sign In</button>
                            </Form>
                            <button className='btn w-100 border mt-4' style={{}}><FcGoogle /> Sign In With Google</button>
                            <button className='btn w-100 border mt-2' style={{}}><FaFacebook /> Sign In With Facebook</button>
                            <button className='btn w-100 mt-2' style={{}}><a href="/">Forgotten Password</a></button>
                        </div>
                        <div className='w-50'>
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
        </>
    );
};

export default BlogAndPostNav;