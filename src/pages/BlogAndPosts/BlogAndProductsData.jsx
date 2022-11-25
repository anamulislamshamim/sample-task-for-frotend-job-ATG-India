import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { AiTwotoneEdit } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Article from '../Cards/Article';
import Education from '../Cards/Education';
import { BsFillExclamationCircleFill } from "react-icons/bs";
import Meet from '../Cards/Meet';
import Job from '../Cards/Job';

const BlogAndProductsData = () => {
    return (
        <Container>
            <div className='d-lg-flex mt-5 lg-pe-5'>
                <div className="lg-w-50 w-100">
                    <Article />
                    <Education />
                    <Meet />
                    <Job />
                </div>
                <div className="lg-w-50 w-100 px-lg-5">
                    <p className='border-bottom py-1 d-flex justify-content-between w-50'><span><GoLocation />  Noida, India</span> <button className="btn border-0 fs-lg" type="button" id="button-addon2"><AiTwotoneEdit /></button></p>
                    <div>
                        <BsFillExclamationCircleFill /> <small>Your location will help us serve better and extend a personalised experience.</small>
                    </div>
                </div>
            </div>
        {/* modal */}
        </Container>
    );
};

export default BlogAndProductsData;