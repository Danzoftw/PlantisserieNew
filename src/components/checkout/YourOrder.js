import { Fragment } from 'react';
import CheckoutCartItem from "./CheckoutCartItem";

const YourOrder = ( { cart } ) => {

	return (
		<Fragment>
			{ cart ? (
				<Fragment>
					{/*Product Listing*/}
					{/* <table className="checkout-cart table table-hover w-full mb-10"> */}
						{/* <thead>
						<tr className="woo-next-cart-head-container text-left">
							<th className="woo-next-cart-heading-el" scope="col"/>
							<th className="woo-next-cart-heading-el" scope="col">Product</th>
							<th className="woo-next-cart-heading-el" scope="col">Total</th>
						</tr>
						</thead> */}
						{/* <tbody> */}
						{/* { cart.products.length && (
							cart.products.map( item => (
								<CheckoutCartItem key={ item.productId } item={ item } />
							) )
						) } */}
						{/*Total*/}
						{/* <tr className="bg-gray-200">
							<td className="woo-next-checkout-total font-normal text-xl">Subtotal</td>
							<td className="woo-next-checkout-total font-bold text-xl">{ cart.totalProductsPrice }</td>
						</tr> */}
						{/* <tr className="">
							<td className=""/>
							<td className="woo-next-checkout-total">Total</td>
							<td className="woo-next-checkout-total">{ cart.totalProductsPrice }</td>
						</tr> */}
						{/* </tbody> */}
					{/* </table> */}
					
						{/* <thead>
						<tr className="woo-next-cart-head-container text-left">
							<th className="woo-next-cart-heading-el" scope="col"/>
							<th className="woo-next-cart-heading-el" scope="col">Product</th>
							<th className="woo-next-cart-heading-el" scope="col">Total</th>
						</tr>
						</thead> */}
						<div className="py-4 place-order-container">
							<div className="px-4 d-flex justify-content-between">
								<div className="woo-next-checkout-total font-normal text-xl">
									<p className="font-hk font-weight-400 mb-0">Subtotal</p>
								</div>
								<div className="woo-next-checkout-total text-xl font-hk font-weight-400 theme color-covid-color">
									{ cart.totalProductsPrice }.00 INR
								</div>
							</div>
							<div className="px-4 py-2 above d-flex justify-content-between">
								<div className="woo-next-checkout-total font-normal text-xl">
									<p className="font-hk font-weight-400 mb-0">Above 1500</p>
								</div>
								<div className="woo-next-checkout-total text-xl font-hk font-weight-400 theme color-covid-color">
									<p className="font-hk font-weight-400 mb-0">₹00.00 INR</p>
								</div>
							</div>
							<div className="px-4 above d-flex justify-content-between">
								<div className="woo-next-checkout-total font-normal text-xl">
									<p className="font-hk font-weight-600 mb-0">Total</p>
								</div>
								<div className="woo-next-checkout-total text-xl font-hk font-weight-600 theme color-covid-color">
									{ cart.totalProductsPrice }.00 INR
								</div>
							</div>
							<div>
								{/* {  cart.products.length && (
							cart.products.map( item => (
								<CheckoutCartItem key={ item.productId } item={ item } />
							) )
						)  } */}
							</div>
						</div>
				</Fragment>
			) : '' }
		</Fragment>
	)
};

export default YourOrder;
