import Slider from "react-slick";
import { Button , Container, Row, Col} from 'react-bootstrap';
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import client from '../src/components/ApolloClient';

const socialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerPadding: 30
};

const productSlider = (dataOne) => {
    const { products }  = dataOne || {};
    console.log(products)
    return(
        <section className="py-16 social-share theme bg-gardenia-color">
            <div className="social-container position-relative">
                <Container>
                    <div className="insta-handle text-center"><p className="theme color-color-2 text-xs font-weight-600">@PLANTISSERIE_GOA</p></div>
                    <div className="insta-title text-center"><p className="text-5xl font-recoleta">share the love on Instagram</p></div>
                    <Slider {...socialsettings} >
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </Slider>
                </Container>
            </div>
        </section>
    )
}

export default productSlider;


export const getStaticProps = async () => {

	const { data } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	return {
		props: {
			products: data?.products?.nodes ? data.products.nodes : [],
		},	
		revalidate: 1
	};
};