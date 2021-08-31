import React, { Component, useEffect, useRef, useState  } from "react";
import Image from 'next/image'
import Layout from "../src/components/Layout";
import { Button , Container, Row, Col} from 'react-bootstrap';
import Slider from "react-slick";
import circularVec from "../src/img/circular-vector.jpg";
import illustration from "../src/img/illustration.png";
import blackbrand from "../src/img/blackbrand.png";
import Categoryimage1 from "../src/img/Category-image-1.png";
import Categoryimage2 from "../src/img/Category-image-2.png";
import Categoryimage3 from "../src/img/Category-image-3.png";
import Categoryimage4 from "../src/img/Category-image-4.png";
import Categoryimage5 from "../src/img/Category-image-5.png";
import Categoryimage6 from "../src/img/Category-image-6.png";
import Categoryimage7 from "../src/img/Category-image-7.png";
import Categoryimage8 from "../src/img/Category-image-8.png";
import Categoryimage9 from "../src/img/Category-image-9.png";
import insta1 from "../src/img/insta-1.png";
import insta2 from "../src/img/insta-2.png";
import insta3 from "../src/img/insta-3.png";
import scrollstuff from "../src/img/scroll-stuff.png";
import arrowdown from "../src/img/arrow-down.png";
import Script from 'next/script';

export default function greenThumb () {
    const socialsettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerPadding: 30
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return(
        <Layout>
            <Script
            src="/static/greenthumb.js"/>
            <section className="green-thumb theme bg-green-thumb-bg-1 mt-48">
                <div className="pt-40 more-stuff-title">
                    <p className="text-center mb-0 text-4xl font-recoleta font-weight-600 theme color-white">green thumb</p>
                </div>
                <div className="py-5 coming-soon d-flex justify-content-center">
                    <div className="inner-image position-relative d-inline-block">
                        <img className="" src={illustration} alt="" />
                        <div class="text-2xl circTxt position-absolute" id="test"></div>
                    </div>
                </div>
                <div className="py-5 scoll-for-stuff d-flex flex-column align-items-center">
                    <div className="pb-2 arrow-down">
                        <img src={arrowdown} alt="" />
                    </div>
                    <div className="content">
                        <img src={scrollstuff} alt="" />
                    </div>
                </div>
            </section>
            <section className="palette">
                <Container>
                    <div className="pt-5 palette-title">
                        <p className="text-center mb-0 text-4xl font-recoleta font-weight-600 theme color-covid-color">plantisserie palette</p>
                    </div>
                    <div className="palette-image d-flex justify-content-center my-4">
                        <img src={blackbrand} alt="" />
                    </div>
                    <div className="palette-sub-title">
                        <p className="text-center mb-0 text-xs font-hk font-weight-400 theme color-covid-color">Discover our wide range of products that make you go awww</p>
                    </div>
                    <div className="category-images position-relative">
                        <Row className="my-4">
                            <Col xs={4}>
                                <img src={Categoryimage1} alt="" />
                                <div className="image-text"><p className="mt-2 font-hk font-weight-600 font-xs theme color-color-2 text-center">Succulents</p></div>
                            </Col>
                            <Col xs={4}>
                                <img src={Categoryimage2} alt="" />
                                <div className="image-text"><p className="mt-2 font-hk font-weight-600 font-xs theme color-color-2 text-center">Cacti</p></div>
                            </Col>
                            <Col xs={4}>
                                <img src={Categoryimage3} alt="" />
                                <div className="image-text"><p className="mt-2 font-hk font-weight-600 font-xs theme color-color-2 text-center">Flowering Plants</p></div>
                            </Col>
                        </Row>
                        <Row className="my-4">
                            <Col xs={4}>
                                <img src={Categoryimage4} alt="" />
                                <div className="image-text"><p className="mt-2 font-hk font-weight-600 font-xs theme color-color-2 text-center">Foliage Plants</p></div>
                            </Col>
                            <Col xs={4}>
                                <img src={Categoryimage5} alt="" />
                                <div className="image-text"><p className="mt-2 font-hk font-weight-600 font-xs theme color-color-2 text-center">Planters</p></div>
                            </Col>
                            <Col xs={4}>
                                <img src={Categoryimage6} alt="" />
                                <div className="image-text"><p className="mt-2 font-hk font-weight-600 font-xs theme color-color-2 text-center">Air Purifying Plants</p></div>
                            </Col>
                        </Row>
                        <Row className="my-4">
                            <Col xs={4}>
                                <img src={Categoryimage7} alt="" />
                                <div className="image-text"><p className="mt-2 font-hk font-weight-600 font-xs theme color-color-2 text-center">Hanging Plants</p></div>
                            </Col>
                            <Col xs={4}>
                                <img src={Categoryimage8} alt="" />
                                <div className="image-text"><p className="mt-2 font-hk font-weight-600 font-xs theme color-color-2 text-center">Climbers</p></div>
                            </Col>
                            <Col xs={4}>
                                <img src={Categoryimage9} alt="" />
                                <div className="image-text"><p className="mt-2 font-hk font-weight-600 font-xs theme color-color-2 text-center">Gifts & Hampers</p></div>
                            </Col>
                        </Row>
                        <div className="bg-cover position-absolute">

                        </div>
                    </div>
                </Container>
            </section>
            <section className="py-5 social-share social-share-green-thumb theme bg-gardenia-color">
                <div className="social-container position-relative">
                    <Container>
                        <div className="insta-handle text-center"><p className="theme color-color-2 text-xs font-weight-600">@PLANTISSERIE_GOA</p></div>
                        <div className="insta-title text-center"><p className="text-5xl md:text-4xl font-recoleta">share the love on Instagram</p></div>
                        <Slider {...socialsettings} >
                            <div className="img-1 position-relative">
                                <img className="image img-fluid w-100" src={insta1} />
                            </div>
                            <div className="img-1 img-2 position-relative">
                                <img className="image img-fluid w-100" src={insta2} />
                            </div>
                            <div className="img-1 img-3 position-relative">
                                <img className="image img-fluid w-100" src={insta3} />
                            </div>
                            <div className="img-1 img-4 position-relative">
                                <img className="image img-fluid w-100" src={insta1} />
                            </div>
                            <div className="img-1 img-4 position-relative">
                                <img className="image img-fluid w-100" src={insta2} />
                            </div>
                        </Slider>
                    </Container>
                </div>
            </section>
        </Layout>
    )
}