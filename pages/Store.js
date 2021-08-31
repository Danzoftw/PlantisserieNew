// import React, { Component, useEffect, useRef, useState  } from "react"
// import Image from 'next/image'
// import Product from "../src/components/Product";
// import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
// import client from '../src/components/ApolloClient';
// import Layout from "../src/components/Layout"
// import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
// import Filter from "../src/components/Filter"
// import { data } from "vfile";
// const Store = (dataOne) => {
    
//     const { products, productCategories }  = dataOne || {};
//     // console.warn("dataOne",products)

//     const [size, setSize] = useState("");
//     const [sort, setSort] = useState("");
//     const [productSets, setProducts] = useState(products);
//     // console.log(productSets);
//     const sortProducts = (e) => {
//         console.log(e.target.value);
//     }
    
//     const filterProducts = (e) => {
//         // console.log(e.target.value);
//         if(e.target.value==""){
//             setSize({size: e.target.value , product: productSets});
//         } else{
//             setSize({
//                 size: e.target.value,
//             })
//             // setProducts({
//             //     productSets: productSets.filter((productSets) => productSets.availableSizes.indexOf(e.target.value) >= 0
//             // ),
//             // })
//             setProducts({
//                 setProducts: setProducts.filter()
//             })
//         }
//         // console.log(productSets);
//     }

//     return(
//         <Layout>
//             <section className="home-store">
//                 <div className="products container mx-auto my-32 px-4 xl:px-0">
//                     <h2 className="products-main-title main-title mb-5 text-1xl font-hk font-weight-600 theme color-covid-color"><span className="main-title-inner">our bestsellers</span></h2>
//                     <div>
//                     {/*Categories*/ }
//                     <div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
//                         <h2 className="main-title text-xl mb-5 uppercase"><span className="main-title-inner">Categories</span></h2>
//                         <ParentCategoriesBlock productCategories={ productCategories }/>
//                     </div>
//                     {/*Products*/ }
//                     </div>
                
//                     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
//                         <Filter
//                         count={productSets.length}
//                         size={size}
//                         sort={sort}
//                         sortProducts={sortProducts}
//                         filterProducts={filterProducts}
//                         >
//                         </Filter>
//                         { products.length ? (
//                             products.map( product => <Product key={ product.id } product={ product }/> )
//                         ) : '' }

//                         {/* {products.filter(products => products.category == "clothing").map(filteredProducts => (
//                                 <li>
//                                 {filteredProducts.name}
//                                 </li>
//                         ))} */}
//                     </div>
//                 </div>
//             </section>
//         </Layout>
//     )
// }

// export default Store;


// // class Store extends Component {
// //     render(){
// //         const { products, productCategories }  = this.props.dataOne || {};
// //         console.warn("products",products)

// //         // const [size, setSize] = useState("");
// //         // const [sort, setSort] = useState("");
// //         // const [productSets, setProducts] = useState(products);
// //         // // console.log(productSets);
// //         // const sortProducts = (e) => {
// //         //     console.log(e.target.value);
// //         // }
        
// //         // const filterProducts = (e) => {
// //         //     // console.log(e.target.value);
// //         //     if(e.target.value==""){
// //         //         setSize({size: e.target.value , product: productSets});
// //         //     } else{
// //         //         setSize({
// //         //             size: e.target.value,
// //         //         })
// //         //         setProducts({
// //         //             productSets: productSets.filter(productSets => productSets.availableSizes.indexOf(e.target.value)>=0)
                    
// //         //         })
// //         //     }
// //         //     // console.log(productSets);
// //         // }
// //         // console.log(dataOne)
// //         return(
// //             <Layout>
// //                 <section className="home-store">
// //                     <div className="products container mx-auto my-32 px-4 xl:px-0">
// //                         <h2 className="products-main-title main-title mb-5 text-1xl font-hk font-weight-600 theme color-covid-color"><span className="main-title-inner">our bestsellers</span></h2>
// //                         <p>{console.log(this.props.dataOne)}</p>
// //                         <div>
// //                         {/*Categories*/ }
// //                         <div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
// //                             <h2 className="main-title text-xl mb-5 uppercase"><span className="main-title-inner">Categories</span></h2>
// //                             {/* <ParentCategoriesBlock productCategories={ productCategories }/> */}
// //                         </div>
// //                         {/*Products*/ }
// //                         </div>
                    
// //                         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
// //                             {/* <Filter
// //                             count={productSets.length}
// //                             size={size}
// //                             sort={sort}
// //                             sortProducts={sortProducts}
// //                             filterProducts={filterProducts}
// //                             >
// //                             </Filter> */}
// //                             {/* { products.length ? (
// //                                 products.map( product => <Product key={ product.id } product={ product }/> )
// //                             ) : '' } */}
// //                         </div>
// //                     </div>
// //                 </section>
// //             </Layout>
// //         )
// //     }
// // }

// // export default Store




// export const getStaticProps = async () => {

// 	const { data: dataOne } = await client.query( {
// 		query: PRODUCTS_AND_CATEGORIES_QUERY,
// 	} );
// 	// const { data: dataTwo } = await client.query( {
// 	// 	query: GET_MENUS,
// 	// } );

// 	return {
// 		props: {
// 			productCategories: dataOne?.productCategories?.nodes ? dataOne.productCategories.nodes : [],
// 			products: dataOne?.products?.nodes ? dataOne.products.nodes : [],
// 			// myData: { headerMenus: dataTwo?.headerMenus?.edges, footerMenus: dataTwo?.footerMenus?.edges }
// 		},	
// 		revalidate: 1
// 	};
// };
import AddToCartButton from '../src/components/cart/AddToCartButton';
import Link from 'next/link';
import React, { Component, useEffect, useRef, useState  } from "react"
import Image from 'next/image'
import Product from "../src/components/Product";
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import client from '../src/components/ApolloClient';
import Layout from "../src/components/Layout"
import { Button , Container, Row, Col} from 'react-bootstrap';
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import Filter from "../src/components/Filter"
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
import doodle from "../src/img/doodle.svg";
import shaky1 from "../src/img/shaky 1.svg";
import storemanbg from "../src/img/store-man-bg.png";
import storeman from "../src/img/store-man.png";
import beleaf from "../src/img/beleaf.png";
import leftleaf from "../src/img/leftleaf.png";
import rightleaf from "../src/img/rightleaf.png";
import insta1 from "../src/img/insta-1.png";
import insta2 from "../src/img/insta-2.png";
import insta3 from "../src/img/insta-3.png";
import black_prince from "../src/img/black_prince.png";
import Slider from "react-slick";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "https://gmail.us6.list-manage.com/subscribe/post?u=7ac432477f34c80dc77f56229&amp;id=5a17070c4d";
const SimpleForm = () => <MailchimpSubscribe url={url}/>

// const items = require('./data/products.json');

const Store = (dataOne) => {
    let filteredProducts = [];
    // const [filteredProducts, setfilteredProducts] = useState("")
    // console.log(filteredProducts);
    const { products, productCategories }  = dataOne || {};
    
    // const [filteredProducts, setfilteredProducts] = useState(products)

    const [mYproducts, setProducts] = useState(products)
    const [myProductCategories, setProductCategories] = useState(productCategories)
    console.log(myProductCategories)
    const [mYnewProducts, setmYnewProducts] = useState(products)
    const [allProducts, setallProducts] = useState("")
    const [Category, setCategory] = useState("")
    console.log(mYproducts)
    // const [filteredProducts, setfilteredProducts] = useState("")
    const handleFilterChange = (e) => {
        //changes state 
        setCategory(e.target.value);
        // console.log(e.target.value)
    };

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
                    slidesToShow: 3,
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

    useEffect(() => {
        // alert(Category);
            // let filteredProducts = mYproducts;
            filteredProducts = mYproducts.filter(product => {
                return(
                    product.productCategories.edges[0].node.name === Category
                )
            })
            console.log(filteredProducts)
        // setProducts(filteredProducts)
        setmYnewProducts(filteredProducts)
    }, [Category])

    const clearFilters = () => {
        setProducts(products);
    }

    useEffect(() => {
        setProducts(mYproducts);
    })
    
    const data = mYnewProducts.length ? mYnewProducts : mYproducts;

    // Make a set of unique categories...
    const categorySet = new Set(mYproducts.map((p) => p.productCategories.edges[0].node.name));
    // ... and a sorted array from the set.
    console.log(categorySet)
    const categories = Array.from(categorySet).sort();


    console.log(data);
    return (
        <Layout>
            <section className="pt-40 featured-product">
                <div className="inner-featured-container theme bg-gardenia-color">
                    <Container>
                        <Row className="py-5 justify-content-around">
                            <Col xs={12} sm={6} md={6} lg={4} className="d-flex align-items-center">
                                <div className="featured-container">
                                    <div className="py-4 featured-category"><p className="text-center mb-0 theme color-color-2 font-weight-600 text-xs">FEATURED PRODUCT</p></div>
                                    <div className="featured-title"><p className="text-center mb-0 font-recoleta font-weight-600 text-4xl sm:text-3xl md:text-4xl theme color-covid-color">Echeveria ‘Black Prince’ </p></div>
                                    <div className="py-4 featured-para"><p className="text-center mb-0 font-weight-400 theme color-covid-color">One of our bestsellers, the Echeveria Black Prince succulent (known as ‘Vishnu Kamal’ in India) has a deep green to brown colour. It can be grown indoors, although it will lose its colour if it does not receive enough light. It flowers during winter.</p></div>
                                    <div className="featured-button text-center"><p className="mb-0 py-3 px-8 text-xs theme bg-color-2 d-inline-block text-center font-weight-600 theme color-white">VIEW PRODUCT</p></div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={5} lg={4} className="d-flex align-items-center pt-5">
                                <img src={black_prince} alt="" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <React.Fragment>
                <div className="filter">
                    <label for="Category">Category:</label>
                    <select name="Category" id="Category" onChange={handleFilterChange}>
                        <option value="all" onChange={clearFilters}>All</option>
                        {categories.map((category, index) => (
                            <option key={category.id}>{category}</option>
                        ))}
                    </select>
                </div>
                <div className="main-filter d-flex">
                    <div className="categories-title"><p className="mb-0">Categories:</p></div>
                    <div className="categories-list">
                    <label>
                        <input 
                        className="mx-2"
                        type="radio"
                        value="Male"
                        />
                        Succulents
                    </label>
                    <label>
                        <input 
                        className="mx-2"
                        type="radio"
                        value="Male"
                        />
                        Cacti
                    </label>
                    <label>
                        <input 
                        className="mx-2"
                        type="radio"
                        value="Male"
                        />
                        Flowering
                    </label>
                    <label>
                        <input 
                        className="mx-2"
                        type="radio"
                        value="Male"
                        />
                        Foliage
                    </label>
                    </div>
                </div>
                <div className="master--card">
                    <div className="container">
                        {/* <div className="row"> */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                            {data.map((products, key) => {
                                return (
                                <div className="product mb-5">
                                    <div className="card border-none">
                                        <div className="image d-flex justify-content-center">
                                            <Link href={ `/product/${ products?.slug }`} >
                                                <img className="w-75" src={products.image.sourceUrl} alt={products.title} />
                                            </Link>
                                        </div>
                                        <div className="outter-info-container">
                                            <div className="details-container d-flex justify-content-between">
                                                <p className="mt-3 mb-0 product-title pl-3 text-sm font-weight-600">{products.name}</p>
                                                <AddToCartButton product={ products }/>
                                            </div>
                                            {/* <p className="description">{products.description}</p> */}
                                            <p className="mt-0.5 pl-3 mb-0 product-description text-xs theme color-color-1">{products.price}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
            <div className="store-line">
                <div className="container">
                    <div className="my-5 line theme bg-color-1 h-0.5 "></div>
                </div>
            </div>
            <div className="store-info">
                <Container>
                    <Row className="justify-content-between">
                        <Col xs={12} sm={4} md={3}>
                            <div className="shipping">
                                <div className="title"><p className="mb-2 text-4xl theme color-covid-color font-weight-600 font-recoleta">Shipping</p></div>
                                <div className="content "><p className="font-weight-400 text-xs theme color-covid-color">We are currently shipping each parcel pan-India. Regular shipping would take around 5-8 business days, however due to the unexpected situation with COVID-19, delivery time can delay without notice.</p></div>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={3}>
                            <div className="returns">
                                <div className="title"><p className="mb-2 text-4xl theme color-covid-color font-weight-600 font-recoleta">Returns</p></div>
                                <div className="content "><p className="font-weight-400 text-xs theme color-covid-color">A lot could happen during transit, therefore please check out our refund policy. We will gladly refund amount or replace the item if it does not fulfil the conditions mentioned in our policy.</p></div>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={3}>
                            <div className="payment">
                                <div className="title"><p className="mb-2 text-4xl theme color-covid-color font-weight-600 font-recoleta">Payment</p></div>
                                <div className="content"><p className="font-weight-400 text-xs theme color-covid-color">We accept GPay and mobile wallets via UPI. We also allow cash on delivery, however, the charges may change due to the unexpected COVID situation we’re currently facing.</p></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
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
                    <div className="category-images- position-relative">
                        
                        {/* <Row className="my-4"> */}
                            {/* <Col xs={4}>
                                <img src={Categoryimage1} alt="" />
                                <div className="image-text"><p className="mt-2 font-hk font-weight-600 font-xs theme color-color-2 text-center">Succulents</p></div>
                            </Col>
                            <Col xs={4}>
                                <img src={Categoryimage2} alt="" />
                                <div className="image-text"><p className="mt-2 font-hk font-weight-600 font-xs theme color-color-2 text-center">Cacti</p></div>
                            </Col> */}
                            {/* <Col xs={4}> */}
                                {/* <div> */}
                                    {/* <div className="product-categories-container container mx-auto my-32 px-4 xl:px-0"> */}
                                        <ParentCategoriesBlock productCategories={ productCategories }/>
                                    {/* </div> */}
                                {/* </div> */}
                            {/* </Col> */}
                        {/* </Row> */}
                        {/* <Row className="my-4">
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
                        </Row> */}
                        <div className="bg-cover position-absolute">

                        </div>
                    </div>
                </Container>
            </section>
            <section className="store-about-us theme bg-color-2">
                <div className="inner-container-store">
                    <Container className="pb-20 pt-8 sm:pb-10 md:pb-16 sm:pt-4 md:pt-8">
                        <Row className="justify-content-between">
                            <Col xs={12} sm={6} className="d-flex align-items-center">
                                <div className="main-container">
                                    <div className="title"><p className="mb-0 theme color-color-1 font-recoleta text-4xl sm:text-2xl md:text-3xl lg:text-4xl">who’s responsible?</p></div>
                                    <div className="content py-3"><p className="mb-0 theme color-white text-xs">Want to know the plant-obsessed people who package the cute plants for your loved ones? Meet the people who are responsible for converting the dream of one into reality and trying to spread a little love along the way.</p></div>
                                    <Link href="/about">
                                        <div className="cursor-pointer mb-0 mb-lg-3 py-2 px-8 sm:py-3 sm:px-10 md:px-8 d-inline-block button theme bg-white"><p className="my-1 mx-3 text-xs font-weight-600 mb-0 theme color-color-2 text-xs">ABOUT US</p></div>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={12} sm={5} className="d-flex align-items-center">
                                <div className="image-container position-relative">
                                    <div className="bg-image">
                                        <img src={storemanbg} alt="" />
                                    </div>
                                    <div className="front-image position-absolute">
                                        <img src={storeman} alt="" />
                                        <div className="doodle">
                                            <img src={doodle} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section className="main-article-section">
                <div className="beleaf">
                    <div className="beleaf-outer-section position-relative">
                        <div className="beleaf-image" style={{ 
                            backgroundImage: `url(${beleaf})`
                            }}>
                        </div>
                        <div className="w-full md:w-3/4 ls:w-2/4 px-3 position-absolute image-contents">
                            <div className="title"><p className="text-center mb-0 font-recoleta font-weight-600 font-weight-normal text-3xl theme color-covid-color">you will not be-leaf what we tell you...</p></div>
                            <div className="sub-title"><p className="text-center font-weight-400 theme color-covid-color paragraph-font">Receive exclusive offers & plantastic goodies, while we bring all the dirt to you.</p></div>
                            <MailchimpSubscribe
                                url={url}
                                render={({ subscribe, status, message }) => (
                                    <div className="submit-box d-flex justify-content-center">
                                    <SimpleForm onSubmitted={formData => subscribe(formData)} />
                                    {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                                    {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                                    {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                                </div>
                                )}
                            />
                            <div className="email"><p className="text-center font-weight-400 theme color-covid-color very-small-font">Your email will never be used to spam and will always be private</p></div>
                        </div>
                    </div>
                </div>
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


export default Store

export const getStaticProps = async () => {

	const { data: dataOne } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );
	// const { data: dataTwo } = await client.query( {
	// 	query: GET_MENUS,
	// } );

	return {
		props: {
			productCategories: dataOne?.productCategories?.nodes ? dataOne.productCategories.nodes : [],
			products: dataOne?.products?.nodes ? dataOne.products.nodes : [],
			// myData: { headerMenus: dataTwo?.headerMenus?.edges, footerMenus: dataTwo?.footerMenus?.edges }
		},	
		revalidate: 1
	};
};