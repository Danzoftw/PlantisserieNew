import { useEffect, useState } from 'react';
import { v4 } from "uuid";
import { getUpdatedItems } from "../../../functions";
import {Cross, Loading} from "../../icons";
import { useRef } from 'react';

const CartItem = ( {
	                   item,
	                   products,
					   updateCartProcessing,
	                   handleRemoveProductClick,
	                   updateCart,
                   } ) => {

	const [productCount, setProductCount] = useState( item.qty );
	const reference = useRef(0);

	// console.log(reference.current.value);
	console.log(products);
	console.log(item);
	
	// function incrVal(){
		
	// 	setProductCount
	// 	console.log(item.qty);
	// }
	

	/*
	 * When user changes the qty from product input update the cart in localStorage
	 * Also update the cart in global context
	 *
	 * @param {Object} event event
	 *
	 * @return {void}
	 */
	const handleQtyChange = ( event, cartKey ) => {

		if ( process.browser ) {

			event.stopPropagation();

			// If the previous update cart mutation request is still processing, then return.
			if ( updateCartProcessing ) {
				return;
			}

			// If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )
			const newQty = ( event.target.value ) ? parseInt( event.target.value ) : 1;

			// Set the new qty in state.
			setProductCount( newQty );

			if ( products.length ) {

				const updatedItems = getUpdatedItems( products, newQty, cartKey );

				updateCart( {
					variables: {
						input: {
							clientMutationId: v4(),
							items: updatedItems
						}
					},
				} );
			}

		}
	};

	const handleChanges = e => {
		setProductCount(event.target.value.replace(/\D/, ""));
	  };
	
	  const topArrowClicked = (e) => {
		setProductCount(prevState => prevState + 1);
	  }
	
	  const bottomArrowClicked = (e) => {
		setProductCount(prevState => prevState - 1);
	  }
	
	return (
		<tr className="woo-next-cart-item" key={ item.productId }>
			<th className="woo-next-cart-element woo-next-cart-el-close">
				{/* Remove item */}
				<span className="woo-next-cart-close-icon cursor-pointer"
				      onClick={ ( event ) => handleRemoveProductClick( event, item.cartKey, products ) }>
					<Cross/>
				</span>
			</th>
			<td className="woo-next-cart-element">
				<img width="64" src={ item.image.sourceUrl } srcSet={ item.image.srcSet } alt={ item.image.title }/>
			</td>
			<div className="product-name d-flex justify-content-around">
				<td className="woo-next-cart-element font-hk">{ item.name }</td>
				<td className="woo-next-cart-element d-flex align-items-center">{ ( 'string' !== typeof item.price ) ? item.price.toFixed( 2 ) : item.price }</td>
			</div>
			
			

			{/* Qty Input */ }
			<td className="woo-next-cart-element woo-next-cart-qty">
				{/* @TODO Need to update this with graphQL query */ }
				{/* <button onclick={menos} class="a">-</button> */}
				<input
					// ref={reference}
					type="number"
					min="1"
					data-cart-key={ item.cartKey }
					className={ `woo-next-cart-qty-input form-control ${ updateCartProcessing ? 'opacity-25 cursor-not-allowed' : '' } ` }
					value={productCount}
					// onChange={ ( event ) => handleQtyChange( event, item.cartKey ) }
				/>
				<span className="arrows d-none">
					<InputArrows topArrowClick={topArrowClicked} bottomArrowClick={bottomArrowClicked} />
				</span>
				{/* <button onClick={incrVal}  class="a">+</button> */}
			</td>
			<div className="total-main d-flex justify-content-center pt-4 mt-1">
				<td className="woo-next-cart-element">
					{ ( 'string' !== typeof item.totalPrice ) ? item.totalPrice.toFixed( 2 ) : item.totalPrice }
				</td>
			</div>
		</tr>
	)
};

const InputArrows = ({topArrowClick, bottomArrowClick}) => {

	return (
	  <div className="arrows-component">
		<div className="arrows">
		  <button onClick={topArrowClick}>
			{/* <div className="arrow-top" />+ */}
		  </button>
		  <button onClick={bottomArrowClick}>
			{/* <div className="arrow-bottom" />- */}
		  </button>
		</div>
	  </div>
	);
  };

export default CartItem;
