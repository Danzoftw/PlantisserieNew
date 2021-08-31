import { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import Link from 'next/link';
import Cartimg from "../../img/cart.svg";

const CartIcon = () => {

	const [ cart ] = useContext( AppContext );
	const productsCount = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsCount : '';
	const totalPrice = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsPrice : '';

	return (
		<Link href="/cart">
			<div className="px-3 cart-icon">
				<a className="block lg:inline-block lg:mt-0 text-black hover:text-black text-center">
					<img src={Cartimg} alt="" />
					{ productsCount ? <span className="">({ productsCount })</span> : '' }
					{/* { totalPrice ? <span>{ totalPrice }</span> : '' } */}
				</a>
			</div>
		</Link>
	)
};

export default CartIcon;
