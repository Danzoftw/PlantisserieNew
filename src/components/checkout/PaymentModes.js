import Error from "./Error";
import React, { Component, useEffect, useRef, useState  } from "react";


const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
     document.body.appendChild(script);
   });
};


const PaymentModes = ( { input, handleOnChange } ) => {
	// const {name, setName} = useState('Vaibhav');
	const { errors, paymentMethod } = input || {}

	async function displayRazorpay() {
		// useEffect(() => {
		// 	loadScript("https://checkout.razorpay.com/v1/checkout.js");
		// });
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
	
		if (!res) {
		  alert('Razorpay SDK failed to load. Are you online?')
		  return
		}
	
		// const data = await fetch('http://localhost:3000/razorpay', { method: 'POST' }).then((t) =>
		//   t.json()
		// )
	
		// console.log(data)
		const Dev = 'localhost';

		const options = {
		  key: Dev ? 'rzp_test_UZTkHoqCWKDtHM' : 'PRODUCTION_KEY',
		  currency: "INR",
		  amount: "5000",
		  order_id: "order_HeQTvkDmv2CVKu", 
		  name: 'Donation',
		  description: 'Thank you for nothing. Please give us some money',
		  image: '',
		  handler: function (response) {
			alert(response.razorpay_payment_id)
			alert(response.razorpay_order_id)
			alert(response.razorpay_signature)
		  },
		  prefill: {
			name,
			email: 'sdfdsjfh2@ndsfdf.com',
			phone_number: '9899999999'
		  }
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	  }
	return (
		<div className="mt-3">
			<Error errors={ errors } fieldName={ 'paymentMethod' }/>
			{/*Direct bank transfers*/}
			{/* <div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="bacs" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'bacs' === paymentMethod}/>
					<span className="woo-next-payment-content">Direct Bank Transfer</span>
				</label>
			</div> */}
			{/*Pay with Paypal*/}
			{/* <div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="paypal" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'paypal' === paymentMethod}/>
					<span className="woo-next-payment-content">Pay with Paypal</span>
				</label>
			</div> */}
			{/*Check Payments*/}
			{/* <div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="cheque" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'cheque' === paymentMethod}/>
					<span className="woo-next-payment-content">Check Payments</span>
				</label>
			</div> */}
			{/*Pay with Stripe*/}
			<div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="razorpay" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'razorpay' === paymentMethod}/>
					<span className="woo-next-payment-content">Razorpay</span>
				</label>
			</div>
			<div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="cod" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'cod' === paymentMethod}/>
					<span className="woo-next-payment-content">Cash on Delivery</span>
					<span className="font-hk font-weight-400 theme color-footer-color-1">Delivery charges will be added according to the total weight of your order and your location</span>
				</label>
			</div>
			{/* <div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="jccpaymentgatewayredirect" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'jccpaymentgatewayredirect' === paymentMethod}/>
					<span className="woo-next-payment-content">JCC</span>
				</label>
			</div> */}
			{/* <div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="ccavenue" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'ccavenue' === paymentMethod}/>
					<span className="woo-next-payment-content">CC Avenue</span>
				</label>
			</div> */}
			{/* <div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="stripe-mode" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'stripe-mode' === paymentMethod}/>
					<span className="woo-next-payment-content">Stripe</span>
				</label>
			</div> */}
			{/*	Payment Instructions*/}
			{/* <div className="woo-next-checkout-payment-instructions mt-2" >
				Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
			</div> */}
		</div>
	);
};

export default PaymentModes;
