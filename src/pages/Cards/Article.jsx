import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ThreeDotPopOver from '../BlogAndPosts/ThreeDotPopOver';
import { AiFillEye } from "react-icons/ai";
import { FcTreeStructure, FcReading } from "react-icons/fc";
function Article() {
    return (
        <Row xs={1} md={1} lg={1} className="g-4 mb-3">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1573495612890-430e48b164df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title><FcReading /> Article</Card.Title>
                            <Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className="w-75">What if famous brands had regular fonts? Meet RegulaBrands!</p>
                                    <ThreeDotPopOver />
                                </div>
                                <p className='my-1'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                                <div className='mt-3 d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <img style={{"width":"2rem","height":"2rem","borderRadius":"50%"}} src="https://i.pinimg.com/736x/ee/f5/ad/eef5addc3bf3c9a386ddf4d352c60272.jpg" alt="" />
                                        <p className='ms-2'>John Doe</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='me-3'><AiFillEye /> 1.4k views</p>
                                        <p className='ms-3'><FcTreeStructure /></p>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
    );
}

export default Article;