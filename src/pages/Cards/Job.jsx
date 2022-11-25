import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ThreeDotPopOver from '../BlogAndPosts/ThreeDotPopOver';
import { AiFillEye } from "react-icons/ai";
import { FcTreeStructure } from "react-icons/fc";
import { GoLocation } from "react-icons/go";
import { GiDiscGolfBag } from "react-icons/gi";
import { GiGymBag } from "react-icons/gi";
function Job() {
    return (
        <Row xs={1} md={1} lg={1} className="g-4 mb-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title><GiDiscGolfBag /> Meet</Card.Title>
                            <Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className="w-75">Software Developer</p>
                                    <ThreeDotPopOver />
                                </div>
                                <div className='w-75 d-flex justify-content-between'>
                                    <p><GiGymBag /> Innovaccer Analytics Private Ltd.</p>
                                    <p><GoLocation /> Nodia, India</p>
                                </div>
                                <button className='w-100 p-2 rounded' style={{"color":"#02B875","border":"1px solid #E0E0E0"}}>Apply on Times Job</button>
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

export default Job;