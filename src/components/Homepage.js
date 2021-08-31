import Link from 'next/link';
import Image from 'next/image';
// import Script from 'next/experimental-script';
// import ScriptLoader from "next/experimental-script";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence, motion } from "framer-motion";
import Script from 'next/script';
import Slider from "react-slick";
import ReactDOM from 'react-dom'
import React, { Component, useEffect, useRef, useState  } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Button , Container, Row, Col} from 'react-bootstrap';
import banner from "../../src/img/banner.png";
import homepageimg1 from "../../src/img/homepageimg1.png";
import homepageimg2 from "../../src/img/homepageimg2.png";
import homepageimg3 from "../../src/img/homepageimg3.png";
import homepageimg4 from "../../src/img/homepageimg4.png";
import homepageleft1 from "../../src/img/homepageleft1.png";
import homepageleft2 from "../../src/img/homepageleft2.png";
import homepageleft3 from "../../src/img/homepageleft3.png";
import homepageright1 from "../../src/img/homepageright1.png";
import homepageright2 from "../../src/img/homepageright2.png";
import homepageblogimg from "../../src/img/homepageblogimg.png";
import slickrightleaf from "../../src/img/slick-right-leaf.png";
import leaf1 from "../../src/img/leaf1.png";
import leaf2 from "../../src/img/leaf2.png";
import elementImg1 from "../../src/img/surface1.svg";
import elementImg2 from "../../src/img/cactus-green.svg";
import elementImg3 from "../../src/img/SvgjsG1008.svg";
import blackbrand from "../../src/img/blackbrand.png";
import patternleaves from "../../src/img/pattern-leaves.png";
import packaging from "../../src/img/packaging.png";
import instaleftleaf from "../../src/img/insta-left-leaf.png";
import instarightleaf from "../../src/img/insta-right-leaf.png";
import insta1 from "../../src/img/insta-1.png";
import insta2 from "../../src/img/insta-2.png";
import insta3 from "../../src/img/insta-3.png";
import noto_potted_1 from "../../src/img/noto_potted-plant.png";
import v1_face from "../../src/img/noto-v1_face-savoring-food.png";
import decoration from "../../src/img/decoration.png";
import ui_box from "../../src/img/flat-ui_box.png";
import main_bg from "../../src/img/main-bg.png";
import Product from "./Product";
import ParentCategoriesBlock from "../../src/components/category/category-block/ParentCategoriesBlock";

const Homepage = (dataOne) => {
    const { products, productCategories }  = dataOne.dataOne || {};
    // console.warn("products",products)
    // console.warn("dataOne",dataOne)
    // state = {
    //   slideIndex: 0,
    //   updateCount: 0
    // };
    const ref = React.createRef();
    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "/static/script.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    //   },[])
   
    // render() {
        const variants = {
            visible: {
              opacity: 1,
              display: "block",
            },
            hidden: {
              opacity: 0,
              transitionEnd: {
                display: "none",
              },
            },
        }

      const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        // afterChange: () =>
        //   this.setState(state => ({ updateCount: state.updateCount + 1 })),
        // beforeChange: (current, next) => this.setState({ slideIndex: next }),
        appendDots: dots => (
        //    <FancyButton><ul id="test" ref={ref} className="d-flex" style={{ margin: "0px" }}>{dots} </ul></FancyButton>
           <ul id="ul-parent" ref={ref} className="d-flex" style={{ margin: "0px" }}>{dots} </ul>
        ),
      };
      
      const socialsettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerPadding: 30
      };

      const FancyButton = React.forwardRef((props, ref) => (
        <div ref={ref} className="FancyButton">
          {props.children}
        </div>
        
      ));
      useEffect(() =>{
          console.log("current ref",ref.current.children[0].className);
          ref.current.children[0].className = ref.current.children[0].className+" Active1";
    },[])
      
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);
    
    //     useEffect(() => {
    //     const script = document.createElement('script');
      
    //     script.src = "/static/script.js";
    //     script.async = true;
      
    //     document.body.appendChild(script);
      
    //     return () => {
    //       document.body.removeChild(script);
    //     }
    //   }, []);

      
      return (
        <>
        <Script
        src="/static/script.js"/>
         {/* <Script
            src="/static/script.js"
            strategy="afterInteractive"
        /> */}
        {/* <div className="z-test"> */}
        <AnimatePresence>
            <motion.div className="z-test"
                initial={{ opacity: 1, zIndex: 999 }}
                transition={{ ease: "easeOut", duration: 2, delay: 3, type: "tween"}}
                animate={{ opacity: 0, zIndex: -1}}
                exit={{ opacity: 0, zIndex: -1 }}
            >
                <div className="banner-loader loader-bg theme bg-loader-bg">
                    <Image
                    src={banner}
                    layout="fill"
                    />
                </div>
            </motion.div>
        </AnimatePresence>
        {/* </div> */}
        <section className="dcs mt-48 z-10">
            <div className="dcs-text">
                <p className="mb-0 text-center gardenia-sub-title-font font-recoleta font-weight-600 theme color-covid-color">decorate, customise, surprise!</p>
                <p className="mb-0 text-center font-hk theme color-covid-color very-small-font">create your own eco-friendly gift arrangement</p>
                <p className="mb-0 text-center font-hk theme color-covid-color very-small-font -mt-2">and have it delivered with your customisations!</p>
            </div>
            <div className="dcs-slider py-5">
                <Container>
                <div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
				<h2 className="main-title text-xl mb-5 uppercase"><span className="main-title-inner">Categories</span></h2>
				{/* <ParentCategoriesBlock productCategories={ productCategories }/> */}
			</div>
                    <div className="slick-container position-relative">
                        <Slider {...settings} >
                            <div className="image-1 position-relative">
                                <img className="slider-image w-100" src={homepageimg1} />
                                <div className="pl-4 pt-3 cite d-flex align-items-center">
                                    <div className="mr-2 para">
                                        <p className="mb-0 font-hk font-weight-600 text-3xl theme color-covid-color">choose your plant type</p>
                                    </div>
                                    <div className="image">
                                        <img className="cite-image" src={noto_potted_1} />
                                    </div>
                                </div>
                            </div>
                            <div className="image-1 image-2 position-relative">
                                <img className="slider-image w-100" src={homepageimg2} />
                                <div className="pl-4 pt-3 cite d-flex align-items-center">
                                    <div className="mr-2 para">
                                        <p className="mb-0 font-hk font-weight-600 text-3xl theme color-covid-color">choose your planter</p>
                                    </div>
                                    <div className="image">
                                        <img className="cite-image" src={v1_face} />
                                    </div>
                                </div>
                            </div>
                            <div className="image-1 image-3 position-relative">
                                <img className="slider-image w-100" src={homepageimg3} />
                                <div className="pl-4 pt-3 cite d-flex align-items-center">
                                    <div className="mr-2 para">
                                        <p className="mb-0 font-hk font-weight-600 text-3xl theme color-covid-color">choose your decoration</p>
                                    </div>
                                    <div className="image">
                                        <img className="cite-image" src={decoration} />
                                    </div>
                                </div>
                            </div>
                            <div className="image-1 image-4 position-relative">
                                <img className="slider-image w-100" src={homepageimg4} />
                                <div className="pl-4 pt-3 cite d-flex align-items-center">
                                    <div className="mr-2 para">
                                        <p className="mb-0 font-hk font-weight-600 text-3xl theme color-covid-color">choose your packaging</p>
                                    </div>
                                    <div className="image">
                                        <img className="cite-image" src={ui_box} />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <Link href="/gardenia">
                            <div className="theme bg-loader-bg button-container display-inline-block text-sm p-3 position-absolute cursor-pointer">
                                <p className="mb-0 theme color-white">CREATE YOUR GIFT</p>
                            </div>
                        </Link>
                        <div className="left-leaf-1 position-absolute">
                            <img className="slider-image" src={homepageleft1} />
                        </div>
                        <div className="left-leaf-1 left-leaf-2 position-absolute">
                            <img className="" src={homepageleft2} />
                        </div>
                        <div className="left-leaf-1 left-leaf-3 position-absolute">
                            <img className="" src={homepageleft3} />
                        </div>
                        <div className="right-leaf-1 position-absolute">
                            <img className="" src={homepageright1} />
                        </div>
                        <div className="right-leaf-2 position-absolute">
                            <img className="" src={homepageright2} />
                        </div>
                        <div className="z-1 right-leaf-3 position-absolute">
                            <img className="" src={slickrightleaf} />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        <div className="main-bg position-relative z-10 top-0">
            <img className="w-100 h-screen" src={main_bg} alt="" />
            <section className="h-screen home-store position-absolute">
                <div className="products container mx-auto my-32 px-4 xl:px-0">
                    <h2 className="products-main-title main-title mb-5 text-1xl font-hk font-weight-600"><span className="main-title-inner theme bg-main-title-inner">our bestsellers</span></h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                        { products.length ? (
                            products.map( product => <Product key={ product.id } product={ product }/> )
                        ) : '' }
                    </div>
                    <div className="view-store text-center">
                        <p className="pb-1 position-relative d-inline-block theme color-color-1 text-md">VIEW STORE</p>
                    </div>
                </div>
            </section>
        </div>
       
        <section className="homepage-blog">
            <div className="p-2 p-sm-3 p-md-4 d-flex justify-content-center blog-nav theme bg-color-2">
                <p className="mb-0 mr-3 theme color-color-1 text-xs sm:text-sm">FACT OF THE DAY:</p>
                <p className="mb-0 theme color-white text-xs d-flex align-items-center">Plants really do respond to sound. Try playing a little Beyonce to all the single leafies out there!</p>
            </div>
            <div className="homepageblogimg position-relative">
                <div className="main-image">
                    <img src={homepageblogimg} alt="" />
                </div>
                <div className="py-3 py-md-4 px-2 px-md-5 px-lg-5 inner-blog-section position-absolute">
                    <p className="text-center theme color-color-2 font-weight-600 text-xs">SAY HELLO AT GARDENIA</p>
                    <p className="mb-0 pb-2 pb-md-3 text-center font-recoleta theme-color-covid-color text-base sm:text-base md:text-lg">Succas for succulents?Get to know more about them here.</p>
                    <div className="text-center view-blog">
                        <Link href="/gardenia">
                            <p className="mb-0 px-4 py-2 theme bg-color-2 color-white d-inline-block very-small-font-homepage">VIEW BLOG</p>
                        </Link>
                    </div>
                    <div className="image-1 position-absolute">
                        <img src={leaf1} alt="" />
                    </div>
                    <div className="image-2 position-absolute">
                        <img src={leaf2} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="a-b-p py-5">
            <div className="container">
                <div className="a-b-p-container">
                    <div className="title"><p className="text-center font-hk font-weight-600 theme color-color-2 text-xs">WHAT IS PLANTISSERIE ALL ABOUT?</p></div>
                    <div className="sub-title"><p className="text-center font-recoleta font-weight-600 text-xl">We try our level best to create cute, clean and affordable plant gifts and arrangements for every occasion.</p></div>
                    <div className="a-b-p-elements d-flex align-items-center flex-wrap justify-content-around">
                        <div className="element-1 d-flex align-items-center">
                            <div className="element-image mx-2">
                                <img src={elementImg1} alt="" />
                            </div>
                            <div className="element-text">
                                <p className="mb-0 font-hk font-weight-500 theme color-covid-color text-xs">Eco-friendly Packaging</p>
                            </div>
                        </div>
                        <div className="element-1 element-2 d-flex align-items-center">
                            <div className="element-image mx-2">
                                <img src={elementImg2} alt="" />
                            </div>
                            <div className="element-text">
                                <p className="mb-0 font-hk font-weight-500 theme color-covid-color text-xs">Cute Plants</p>
                            </div>
                        </div>
                        <div className="my-3 my-sm-2 element-1 element-3 d-flex align-items-center">
                            <div className="element-image mx-2">
                                <img src={elementImg3} alt="" />
                            </div>
                            <div className="element-text">
                                <p className="mb-0 font-hk font-weight-500 theme color-covid-color text-xs">Love from Goa!</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-2 know-more text-center">
                        <Link href="/About-us">
                            <p className="text-xs font-weight-600 d-inline theme color-color-1 position-relative cursor-pointer">KNOW MORE</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="green-thumb theme bg-green-thumb-bg position-relative">
            <div className="green-thumb-section-image position-absolute">
                <img src={patternleaves} alt="" />
            </div>
            <Container>
               <Row className="py-48">
                   <Col xs={12} sm={5}>
                       <div className="green-thumb-image">
                           <img src={blackbrand} alt="" />
                       </div>
                       <div className="green-thumb-title pt-8 md:pt-28">
                           <p className="font-weight-600 theme color-covid-color text-md font-recoleta text-5xl">green thumb</p>
                       </div>
                       <div className="green-thumb-paragraph pr-0 pr-sm-5">
                           <p className="font-weight-600 theme color-covid-color text-xs">Direct from the garden, with no additives and no harmful pesticides, our organic vegetable, herb and flower plants are grown with love, care and good, healthy soil. Order online and decorate your home with high-quality plants, delivered right at your home!</p>
                           <p className="font-weight-600 theme color-covid-color text-xs">With the growing, alarming rate of pollution created by plastic everyday, we feel the need to make our part and avoid the use of plastic. Your deliveries will be hand-packaged with bio-degradable packaging, giving roots to our <span className="theme color-color-1">Green Thumb</span> Initiative.</p>
                           <p className="font-weight-600 theme color-covid-color text-xs">We hope you will help us spread the word and make the <span className="theme color-color-1">Green Thumb</span> initiative a success.</p>
                       </div>
                       <div className="pt-4 know-more">
                        <p className="text-xs font-weight-600 d-inline theme color-color-1 position-relative cursor-pointer">KNOW MORE</p>
                       </div>
                   </Col>
                   <Col xs={12} sm={7}>
                       <div className="pt-14 sm:pt-0 plastic-tree-image d-flex justify-content-center">
                           <Image
                                alt="packaging"
                                src={packaging}
                                width={280}
                                height={280}
                            />
                       </div>
                       <div className="trees-grown">
                           <div className="trees-grown-count"><p className="theme color-color-2 text-xs font-weight-600 text-right">10 trees planted</p></div>
                           <div className="trees-grown-bar theme bg-gardenia-color">
                                <ProgressBar now={60} />
                           </div>
                           <div className="trees-grown-para-1 text-xs"><p className="font-weight-400">For each <span className="theme color-color-1">₹1,000</span> we receive, we grow a tree!</p></div>
                           <div className="trees-grown-para-2 text-xs font-weight-400 theme color-covid-color"><p>You can also help us and add to a greener environment by donating towards the cause.</p></div>
                           <div className="donate-button text-right">
                               <button><p className="mb-0 px-5 py-3 theme bg-color-2 theme color-white text-xs">DONATE</p></button>
                           </div>
                       </div>
                   </Col>
               </Row>
           </Container>
        </section>
        <section className="py-16 social-share theme bg-gardenia-color">
            <div className="social-container position-relative">
                <Container>
                    <div className="insta-handle text-center"><p className="theme color-color-2 text-xs font-weight-600">@PLANTISSERIE_GOA</p></div>
                    <div className="insta-title text-center"><p className="text-5xl font-recoleta">share the love on Instagram</p></div>
                    <Slider {...socialsettings} >
                        {/* <div className="image-1 position-relative"> */}
                            <img className="image-1 img-fluid" src={insta1} />
                            {/* <Image
                                alt="insta1"
                                src={insta1}
                                width={200}
                                height={200}
                            /> */}
                        {/* </div> */}
                        {/* <div className="image-1 image-2 position-relative"> */}
                            <img className="image-1 img-fluid " src={insta2} />
                            {/* <Image
                                alt="insta2"
                                src={insta2}
                                width={200}
                                height={200}
                            /> */}
                        {/* </div> */}
                        {/* <div className="image-1 image-3 position-relative"> */}
                            <img className="image-1 img-fluid " src={insta3} />
                            {/* <Image
                                alt="insta3"
                                src={insta3}
                                width={200}
                                height={200}
                            /> */}
                        {/* </div> */}
                        {/* <div className="image-1 image-4 position-relative"> */}
                            <img className="image-1 img-fluid " src={insta1} />
                            {/* <Image
                                alt="insta1"
                                src={insta1}
                                width={200}
                                height={200}
                            /> */}
                        {/* </div> */}
                        {/* <div className="image-1 image-4 position-relative"> */}
                            <img className="image-1 img-fluid " src={insta2} />
                            {/* <Image
                                alt="insta2"
                                src={insta2}
                                width={200}
                                height={200}
                            /> */}
                        {/* </div> */}
                    </Slider>
                </Container>
                <div className="container-images">
                    <div className="left-image position-absolute">
                        <Image
                            alt="packaging"
                            src={instaleftleaf}
                            width={280}
                            height={280}
                        />
                    </div>
                    <div className="right-image position-absolute">
                        <Image
                            alt="packaging"
                            src={instarightleaf}
                            width={280}
                            height={280}
                        />
                    </div>
                </div>
            </div>
        </section>
    </>
      );
    }
//   }

export default Homepage
