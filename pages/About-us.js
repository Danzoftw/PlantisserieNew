import React, { useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../src/components/Layout";
// import { useLocation,Link, NavLink } from 'react-router-dom';
import { Button , Container, Row, Col} from 'react-bootstrap';
import aboutus from '.././src/img/aboutus.png';
import img1 from '.././src/img/aboutus-arrow.png';
import team from '.././src/img/team.png';
import PostList from './PostList';
import InstagramEmbed from 'react-instagram-embed';
import insta1 from "../src/img/insta-1.png";
import insta2 from "../src/img/insta-2.png";
import insta3 from "../src/img/insta-3.png";
import Slider from "react-slick";
import plantworld from "../src/img/plant-world.png"
import patternleavesgreen from "../src/img/pattern-leaves-green.svg"
import circle1 from "../src/img/circle-1.png"
import circle2 from "../src/img/circle-2.png"
import circle3 from "../src/img/circle-3.png"
// import axios from 'axios';
// function usePosts(){
//     const [posts, setPosts] = useState([]) // new

// 	useEffect(() => {
// 		fetch("https://v1.nocodeapi.com/danzoftw/instagram/yqqDjvQrJmjQQKqd")
// 			.then((response) => response.json())
// 			.then((data) => {
// 				setPosts(data) // new
// 			})
            
// 	}, [])
//     return posts
// }



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
    // const [posts, setData] = useState([]);
    // useEffect(() => {
    //     const instaApi = "https://v1.nocodeapi.com/danzoftw/instagram/yqqDjvQrJmjQQKqd";
    //     const fetchData = async () => {
    //     try{
    //         const response = await fetch(instaApi);
    //         const data = await response.json();
    //         setData(data);
           
    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     };
    //     fetchData();
    // }, []);
 
    // const axios = require('axios');
    
    // axios({
    //     method: 'get',
    //     url: 'https://www.instagram.com/graphql/query/?query_hash=d747cda979152878fe8c8ee570dfeeb5&variables=%7B%22only_stories%22%3Atrue%2C%22stories_prefetch%22%3Atrue%2C%22stories_video_dash_manifest%22%3Afalse%7D', 
    //     params: {},
    // }).then(function (response) {
    //         // handle success
    //         console.warn(response.data);
    //         const allNotes = response.data;
    // }).catch(function (error) {
    //         // handle error
    //         console.log(error);
    // })

    //Axios new API



    // console.log()
    // const newComnst = JSON.parse(posts);
    // var myObject = JSON.parse(posts);
    // console.warn(myObject);
    // console.warn(posts.data);
    // const posts = usePosts() // new
    // const newData = posts.data;
    // var usersWithName = Object.keys(posts).map(function(key) {
    //     var url = posts[key]
    //     url.id = key;
    //     console.warn(key)
    //     return url;
    // });

    return (
        <Layout>
            <section className="about-section-1 pt-48 ">
                <Container fluid className="pt-lg-5">
                    <Row className="pt-sm-5 pt-md-0 pl-lg-5 py-3 py-sm-3">
                        {/* <Col sm={4}>
                            <div className="about-text">
                                <div className="about-cite">
                                    <p className="mb-0 theme color-footer-color-1 position-relative pl-3 text-xs sm:text-base">Trying to make the world greener</p>
                                </div>
                                <div className="about-text-para position-relative">
                                    <p className="about-title mb-0 font-recoleta theme color-covid-color">patisserie <br/>of plants</p>
                                        <img className="position-absolute"
                                            src={img1}
                                        />
                                </div>
                            </div>
                        </Col> */}
                        <Col sm={12} className="-z-10 px-0 pt-5 pt-sm-0 pl-sm-4 pl-md-0">
                            <div className="pt-20 md:pt-10 right-image position-relative">
                                <div className="img-container">
                                    <img
                                        src={aboutus}
                                    />
                                </div>
                                
                                <div className="about-text position-absolute">
                                    <div className="about-cite">
                                        <p className="mb-0 theme color-footer-color-1 position-relative pl-3 text-xs sm:text-base">Trying to make the world greener</p>
                                    </div>
                                    <div className="about-text-para position-relative">
                                        <p className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl about-title mb-0 font-recoleta theme color-covid-color">patisserie <br/>of plants</p>
                                            <img className="position-absolute"
                                                src={img1}
                                            />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="sm:px-48 md:px-10 about-section-2">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={9} className="">
                            <div className="unusual-name">
                            <div className="unusual-name-title">
                                <p className="pb-3 font-weight-700 theme color-covid-color about-para">Why the unusual name?</p>
                            </div>
                            <div className="pb-3 unusual-name-paragraph">
                                <p className="font-weight-700 theme color-covid-color about-para">It all started off with our love for French bakeries, namely, the patisserie. The layout of rows and rows of bite sized macarons in counter displays in vibrant colours reminded us of our own rows of ‘mini’ succulents and we thought wouldn’t it be great if we could create that similar aesthetic with plants?
                                ether its a warm muffin on a rainy day or a pot of cuteness in the sunshine, we give away tiny packets of joy, we are a patisserie of plants.</p>
                            </div>
                            <div className="pb-3 unusual-name-paragraph">
                                <p className="font-weight-700 theme color-covid-color about-para">An amalgamation of both these words gave us plantisserie, and it epitomizes what we are all about – showcasing beauty from the small things, and doing what makes you happy in life. Whether its a warm muffin on a rainy day or a pot of cuteness in the sunshine, we give away tiny packets of joy, we are a patisserie of plants.</p>
                            </div>
                            <div className="unusual-name-title">
                                <p className="font-weight-700 theme color-covid-color about-para">Let's meet the crazy creators, shll we?</p>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="sm:px-48 md:px-10 md:py-10 about-section-3">
              <Container>
                  <PostList />
              </Container>
            </section>
            <section className="pt-5 about-us-image">
                <img src={team} alt="" className="w-100" />
            </section>
            <section className="py-14 about-us-gardenia overflow-hidden">
                <Container>
                    <div className="sub-container">
                        <Row className="justify-content-center">
                            <Col xs={12} sm={7} className="d-flex align-items-center pb-5">
                                <div className="plant-world-container position-relative">
                                    <div className="gardenia">
                                        <p className="mb-0 font-hk font-weight-600 text-xs theme color-color-2">GARDENIA</p>
                                    </div>
                                    <div className="title py-2">
                                        <p className="mb-0 font-recoleta font-weight-600 text-2xl theme color-covid-color">
                                            Want to know what we think about the plant world?
                                        </p>
                                    </div>
                                    <div className="para">
                                        <p className="mb-0 font-hk font-weight-400 text-xs theme color-covid-color">Cras penatibus a elementum vel sed nunc, eget at. Eu ipsum quis ipsum sagittis, sagittis dui ut sem morbi. Sit urna sit non ut purus velit et, feugiat at. Urna, sagittis pretium ut curabitur arcu in morbi. Ridiculus nisl nisi sed quis. Tellus sit morbi molestie luctus quis non et vestibulum sit.Lacinia amet ultrices bibendum cursus ipsum sed facilisis.</p>
                                    </div>
                                    <div className="d-none floating-image position-absolute">
                                        <img src={plantworld} alt=""/>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={5} className="d-flex justify-content-center">
                                <div className="pl-0 image inline-block  position-relative">
                                    <div className="image-collection-container position-relative">
                                        <img src={patternleavesgreen} alt="" className="d-inline-block"/>
                                        <div className="rounded-full inner-circle position-absolute theme bg-covid-color cursor-pointer z-10">
                                            <p className="mb-0 position-absolute theme color-white">Enter</p>
                                        </div>
                                        <div className="image-1 position-absolute">
                                            <img src={circle1} alt="" />
                                        </div>
                                        <div className="image-2 position-absolute">
                                            <img src={circle2} alt="" />
                                        </div>
                                        <div className="image-3 position-absolute">
                                            <img src={circle3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
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