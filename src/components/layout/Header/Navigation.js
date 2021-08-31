import Link from 'next/link';
import CartIcon from "../../cart/CartIcon";
import { useState } from 'react';
import React, { Component, Fragment} from 'react';
import Image from 'next/image'
import {isEmpty} from 'lodash';
import client from "../../ApolloClient";
import GET_MENUS from "../../../queries/get-menus";
import blackbrand from "../../../img/blackbrand.png";
import search from "../../../img/search.svg";
import likeImg from "../../../img/like.svg";

import {Facebook, Cross, Twitter, Youtube} from "../../icons";
// const Navigation = ( data ) => {
	export default function Navigation ( data ) {
	// const headerMenusData = navData.navData.menus.headerMenus;
	// console.warn('Headermen',data);
	const [ isMenuVisible, setMenuVisibility ] = useState(false);
	// if(isEmpty(headerMenusData)){
	// 	return null;
	// }

	return (
		<div className="bg-white position-fixed left-0 right-0 top-0 z-index-999">
			<div className="covid-msg theme bg-covid-color">
				<p className="p-3 mb-0 text-center theme color-white font-weight-normal font-hk small-font">Check out our current COVID - 19 policies regarding deliveries</p>
			</div>
			<div className="py-3 px-5 flex items-center justify-between flex-wrap container-fluid mx-auto">
				<div className="flex items-center flex-shrink-0 text-black">
					<span className="font-semibold text-xl tracking-tight header-brand">
					<Link href="/">
						<a className="text-decoration-none navbar-brand font-weight-600 big-font">plantisserie</a>
					</Link>
					</span>
					<div className="brandlogo mr-3">
					<img src={blackbrand} />
					</div>
				</div>

				{/*Menu button*/}
				<div className="block lg:hidden">
					<button onClick={() => setMenuVisibility(! isMenuVisible)} className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black">
						<svg className="brandlogo fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
				</div>

				{/*MMenu in mobile*/}
				<div className={`${ isMenuVisible ? 'max-h-full h-full' : 'h-0' } w-full overflow-hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`}>
					{/* { headerMenusData.length ? (

					<div className="text-sm font-medium uppercase lg:flex-grow">
						{ headerMenusData.map( menu => (
							<Link key={menu?.node?.id} href={menu?.node?.url}>
								<a className="block lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
								{menu.node.label}
								</a>
							</Link>
						)) }
					</div>
					): null } */}
					<div className="text-sm font-medium uppercase lg:flex-grow">
						<Link href="/Store">
							<a className="font-weight-600 font-hk normal-case block lg:inline-block lg:mt-0 mr-8 text-decoration-none medium-font theme color-covid-color">
								Store
							</a>
						</Link>
						<Link href="/gardenia">
							<a className="font-weight-600 font-hk normal-case block lg:inline-block lg:mt-0 mr-8 text-decoration-none medium-font theme color-covid-color">
								Gardenia
							</a>
						</Link>
						<Link href="/About-us">
							<a className="font-weight-600 font-hk normal-case block lg:inline-block lg:mt-0 mr-8 text-decoration-none medium-font theme color-covid-color">
								About us
							</a>
						</Link>
						<Link href="/Green-Thumb">
							<a className="font-weight-600 font-hk normal-case block lg:inline-block lg:mt-0 mr-8 text-decoration-none medium-font theme color-covid-color">
								Green Thumb
							</a>
						</Link>
					</div>
					<div className="text-sm font-medium flex align-items-center">
						<div className="d-flex align-items-center">
							<p className="font-hk px-0 px-sm-2 mb-0 theme color-color-1 font-weight-600 medium-font">hello@plantisserie.in</p>
						</div>
						<div className="px-3 search-btn">
							<img src={search} alt="" />
						</div>
						<CartIcon/>
						<div className="px-3 like-icon">
							<img src={likeImg} alt="" />
						</div>
						<div className="log-reg d-flex mr-4">
							<div className="login"><p className="font-weight-400 font-hk theme color-color-2 mb-0">login</p></div><span className="px-1">|</span>
							<div className="register"><p className="font-weight-400 font-hk theme color-color-1 mb-0">register</p></div>
						</div>
						<div className="create-gift theme bg-color-2">
							<p className="font-hk text-xs px-4 mb-0 py-3 font-weight-600 theme color-white">CREATE YOUR GIFT</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};