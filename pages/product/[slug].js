import Layout from '../../src/components/Layout';
import { useRouter } from 'next/router';
import React, { Component, useEffect, useRef, useState  } from "react"
import client from '../../src/components/ApolloClient';
import CustomAddToCart from '../../src/components/cart/CustomAddToCart';
import AddToCartButton from '../../src/components/cart/AddToCartButton';
import {PRODUCT_BY_SLUG_QUERY, PRODUCT_SLUGS} from '../../src/queries/product-by-slug';
import PRODUCTS_AND_CATEGORIES_QUERY from "../../src/queries/product-and-categories";
import { isEmpty } from 'lodash';
import GalleryCarousel from "../../src/components/single-product/gallery-carousel";
import Price from "../../src/components/single-product/price";
import { Button , Container, Row, Col} from 'react-bootstrap';
// import Productslider from "../product-slider";
import Link from 'next/link';
import Store from "../Store";
import Slider from "react-slick";

const socialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerPadding: 30
  };

export default function Product(props) {
    const { product} = props;
    const { products} = props;
    const [mYproducts, setProducts] = useState(products)
    console.log(products);
    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

	return (
		<Layout>
			{ product ? (
				<section className="single-product container mx-auto mt-40 px-4 xl:px-0">
                    <Container>
                        <Row>
                            <Col sm={4}>
                                <div className="product-images">
                                    { !isEmpty( product?.galleryImages?.nodes ) ? (
                                        <GalleryCarousel gallery={product?.galleryImages?.nodes}/>
                                    ) : !isEmpty( product.image ) ? (
                                        <img
                                            src={ product?.image?.sourceUrl }
                                            alt="Product Image"
                                            width="100%"
                                            height="auto"
                                            srcSet={ product?.image?.srcSet }
                                        />
                                    ) : null }
                                </div>
                            </Col>
                            <Col sm={5}>
                                <div className="pt-5 product-info">
                                    <h4 className="products-main-title text-4xl font-recoleta theme color-covid-color font-weight-600">{ product.name }</h4>
                                    <div
                                        dangerouslySetInnerHTML={ {
                                            __html: product.shortDescription,
                                        } }
                                        className="short-description font-weight-400 theme color-color-1 text-xs"
                                    />
                                    <div
                                        dangerouslySetInnerHTML={ {
                                            __html: product.description,
                                        } }
                                        className="product-description mb-5 font-weight-400 text-base"
                                    />
                                    <div className="bottom-line w-100 theme bg-color-1"></div>
                                {/* <Price salesPrice={product?.price} regularPrice={product?.regularPrice}/> */}
                                <div className="add-remove-product">
                                    
                                </div>
                                <CustomAddToCart product={ product }/>
                                </div>
                                <div className="product-details">
                                    <div className="additional-info">
                                        <p className="d-inline-block position-relative font-recoleta font-weight-600 text-2xl">Additional Information +</p>
                                    </div>
                                    <div className="how-to">
                                        <p className="d-inline-block position-relative font-recoleta font-weight-600 text-2xl">How to +</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <section className="slider-products">
                        <Container>
                            <div className="pl-3 recent-products">
                                <div className="title d-flex">
                                    <p className="font-recoleta theme color-covid-color text-2xl">You will also like /</p>
                                    <p className="ml-1 font-recoleta theme color-footer-color-1 text-2xl">Last seen items</p>
                                </div>
                            </div>
                            {/* <Row> */}
                            <div className="social-share">
                                <Slider {...socialsettings} >
                                    {mYproducts.map((products, key) => {
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
                                                            <p className="mt-3 mb-0 product-title pl-3 text-xs font-weight-600">{products.name}</p>
                                                            <AddToCartButton product={ products }/>
                                                        </div>
                                                        {/* <p className="description">{products.description}</p> */}
                                                        <p className="mt-0.5 pl-3 mb-0 product-description text-xs theme color-color-1">{products.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })} 
                                </Slider>
                            </div>
                            {/* </Row> */}
                        </Container>
                    </section>
				</section>
			) : (
				''
			) }
		</Layout>
	);
};


export async function getStaticProps(context) {

    const {params: { slug }} = context

    const { data: dataOne } = await client.query({
        query: PRODUCT_BY_SLUG_QUERY,
        variables: { slug }
    });
    const { data: dataTwo } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );
    return {
        props: {
            product: dataOne?.product || {},
            products: dataTwo?.products?.nodes ? dataTwo.products.nodes : []
        },
        revalidate: 1
    };
}

export async function getStaticPaths () {
    const { data } = await client.query({
        query: PRODUCT_SLUGS
    })

    const pathsData = []

    data?.products?.nodes && data?.products?.nodes.map((product) => {
        if (!isEmpty(product?.slug)) {
            pathsData.push({ params: { slug: product?.slug } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}
