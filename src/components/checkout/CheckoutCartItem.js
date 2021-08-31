import { Row, Col } from 'react-bootstrap';

const CheckoutCartItem = ( { item } ) => {
	return (
		// <tr className="woo-next-cart-item" key={ item.productId }>
		// 	<td className="woo-next-cart-element">
		// 		<img width="100" src={ item.image.sourceUrl } srcSet={ item.image.srcSet } alt={item.image.title}/>
		// 	</td>
		// 	<td className="woo-next-cart-element">{ item.name }</td>
		// 	<td className="woo-next-cart-element">{ item.totalPrice }</td>
		// </tr>
		<>
			<div className="p-4 py-2 product d-flex woo-next-cart-item" key={ item.productId }>
				<div className="w-100 prod-info d-flex justify-content-between">
					{/* <div className="row"> */}
						{/* <Col sm={8}> */}
							<div className="w-50 product-container d-flex">
								<div className="w-28 prod-image">
									<img src={ item.image.sourceUrl } srcSet={ item.image.srcSet } alt={item.image.title}/>
								</div>
								<div className="title">
									<p className="mb-0 font-hk font-weight-600">{ item.name }</p>
									<p className="mb-0 font-hk font-weight-400">Quantity : { item.qty }</p>
								</div>
							</div>
						{/* </Col> */}
						{/* <Col sm={4}> */}
							<div className="prod-price">
								<p className="mb-0 font-hk font-weight-600">{ item.totalPrice } INR</p>
							</div>
						{/* </Col> */}
					{/* </div> */}
				</div>
			</div>
		</>
	)
};

export default CheckoutCartItem;
