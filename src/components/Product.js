import Link from 'next/link';
import AddToCartButton from '../components/cart/AddToCartButton';
import Price from "./single-product/price";
import Image from "../image";
import {DEFAULT_PRODUCT_HOME_IMG_URL} from "../constants/urls";
import React, { Component, useEffect, useRef, useState  } from "react"

const Product = ( props ) => {
	const { product } = props;
	const [mYproducts, setProducts] = useState(props)
	// console.log(mYproducts)
	useEffect(() =>{
		setProducts(mYproducts);
	})
	// console.log("product page",props)
	// const prodAttributes = product?.attributes.edges[0].node;
	// console.log(prodAttributes)
	return (
		// @TODO Need to handle Group products differently.
		undefined !== product && 'GroupProduct' !== product.__typename ? (
			<div className="max-w-xs product mb-5">
				<Link href={ `/product/${ product?.slug }`} >
					<a>
						<Image
							className="object-cover"
							width="200"
							height="200"
							loading="lazy"
							sourceUrl={ product?.image?.sourceUrl ?? '' }
							defaultImgUrl={DEFAULT_PRODUCT_HOME_IMG_URL}
							altText={product?.image?.altText ?? product?.slug}
						/>
					</a>
				</Link>
				<div className="product-info">
					<div className="details-container d-flex align-items-center justify-content-between">
						<h3 className="product-title mt-3 text-xs font-weight-600">
							{ product.name ? product.name : '' }
						</h3>
						<AddToCartButton product={ product }/>
					</div>
					<div className="product-description text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: (product?.description)}}/>
						<div className="price d-flex justify-content-between">
							<Price salesPrice={product?.price} regularPrice={product?.regularPrice}/>
							
							{/* {product.attributes.map((products, index) => { */}
								{/* return( */}
									<>
										<div className="d-flex attributes pr-2.5 align-items-center">
											{/* <div className="w-3 h-3 mx-2 color-1 rounded-full theme bg-black"> */}
												{/* {} */}
												{/* {console.log(props.product.attributes.edges[0].node.name)} */}
											{/* </div> */}
											{/* { product.attributes ? product.attributes : '' } */}
										</div>
									</>
								{/* ) */}
							{/* })} */}
						</div>
					</div>
				</div>
		) : (
			''
		)
	);
};

export default Product;
