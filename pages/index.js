// import Layout from "../src/components/Layout";
import Layout from "../src/components/Layout";
import Product from "../src/components/Product";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";
// import Home from "./home"
import GET_MENUS from "../src/queries/get-menus";
import Homepage from "../src/components/Homepage";


export default function Home (dataOne) {
	// console.log("dataone",dataOne)
	// const { productCategories } = dataOne || {};
	return (
		<Layout dataOne={dataOne}>
			<Homepage dataOne={dataOne}/>
			{/* Categories*/ }
			{/* <div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
				<h2 className="main-title text-xl mb-5 uppercase"><span className="main-title-inner">Categories</span></h2>
				<ParentCategoriesBlock productCategories={ productCategories }/>
			</div> */}
			{/*Products*/ }
		</Layout>
	)
};

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
