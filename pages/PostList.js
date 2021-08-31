import React, { useState, useEffect, Component } from "react";
import PostData from '../src/data.json';
import { Row, Col } from 'react-bootstrap';
// import image1 from '../src/img/divya.png';

class PostList extends Component{
    
    render () {
        return (
            <>
                {PostData.map((postDetail, index) => {
                    return index % 2 == 0 ? <Row key={index} className="pt-3 justify-content-center"><Col sm={12} md={4}>
                            <img
                                src={postDetail.image}
                            />
                        </Col>
                        <Col sm={12} md={5} className="d-flex align-items-end">
                            <div className="author-contents">
                                <div className="font-recoleta author">{postDetail.author}</div>
                                <div className="py-2 theme color-footer-color-1 tags font-weight-600 text-xs d-flex">
                                    <div className="author d-flex">{postDetail.tag1}<p className="mb-0 mx-1">|</p></div>
                                    <div className="author d-flex">{postDetail.tag2}<p className="mb-0 mx-1">|</p></div>
                                    <div className="author">{postDetail.tag3}</div>
                                </div>
                                <div  className="text-xs para-1 theme color-covid-color">{postDetail.para1}</div>
                                <div className="text-xs para-2 theme color-covid-color pt-3">{postDetail.para2}</div>
                            </div>
                        </Col>
                    </Row>
                    :
                    <Row key={index} className="pt-3 justify-content-center">
                        <Col sm={12} md={5} className="d-flex align-items-end">
                            <div className="author-contents">
                                <div className="font-recoleta author">{postDetail.author}</div>
                                <div className="py-2 theme color-footer-color-1 tags font-weight-600 text-xs d-flex">
                                    <div className="author d-flex">{postDetail.tag1}<p className="mb-0 mx-1">|</p></div>
                                    <div className="author d-flex">{postDetail.tag2}<p className="mb-0 mx-1">|</p></div>
                                    <div className="author">{postDetail.tag3}</div>
                                </div>
                                <div  className="text-xs para-1 theme color-covid-color">{postDetail.para1}</div>
                                <div className="text-xs para-2 theme color-covid-color pt-3">{postDetail.para2}</div>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <img
                                src={postDetail.image}
                            />
                        </Col>
                    </Row>
                })}
            </>
        );
    }
}

export default PostList