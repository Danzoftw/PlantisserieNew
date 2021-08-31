import {useState, useContext} from "react";
import {useQuery, useMutation} from '@apollo/client';
import Link from "next/link";
import {v4} from 'uuid';
import cx from 'classnames';

import {AppContext} from "../context/AppContext";
import {getFormattedCart} from "../../functions";
import GET_CART from "../../queries/get-cart";
import ADD_TO_CART from "../../mutations/add-to-cart";
import cartimage from "../../img/add-to-cart.png";
import image from "next/image";
const AddToCart = (props) => {

    const {product} = props;

    const productQryInput = {
        clientMutationId: v4(), // Generate a unique id.
        productId: product.productId,
    };

    const [cart, setCart] = useContext(AppContext);
    const [showViewCart, setShowViewCart] = useState(false);
    const [requestError, setRequestError] = useState(null);

        // Get Cart Data.
    const {data, refetch} = useQuery(GET_CART, {
            notifyOnNetworkStatusChange: true,
            onCompleted: () => {

                // Update cart in the localStorage.
                const updatedCart = getFormattedCart(data);
                localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

                // Update cart data in React Context.
                setCart(updatedCart);
            }
        });

    // Add to Cart Mutation.
    const [addToCart, {
        data: addToCartRes,
        loading: addToCartLoading,
        error: addToCartError
    }] = useMutation(ADD_TO_CART, {
        variables: {
            input: productQryInput,
        },
        onCompleted: () => {
            // On Success:
            // 1. Make the GET_CART query to update the cart with new values in React context.
            refetch();

            // 2. Show View Cart Button
            setShowViewCart(true)
        },
        onError: (error) => {
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }
        }
    });

    const handleAddToCartClick = async () => {
        setRequestError(null);
        await addToCart();
    };
    
    function mais(){
        var atual = document.getElementById("total").value;
        var novo = atual - (-1); //Evitando Concatenacoes
        document.getElementById("total").value = novo;
      }
      
      function menos(){
        var atual = document.getElementById("total").value;
        if(atual > 0) { //evita números negativos
          var novo = atual - 1;
          document.getElementById("total").value = novo;
        }
      }

    return (
        
        <div>
            {/*	Check if its an external product then put its external buy link */}
            {"ExternalProduct" === product.__typename ? (
                    <a href={product?.externalUrl ?? '/'} target="_blank"
                       className="px-3 py-1 rounded-sm text-sm border-solid border border-current inline-block hover:bg-purple-600 hover:text-white hover:border-purple-600">
						Buy now
                    </a>
                ) :
                <button
					disabled={addToCartLoading}
                    onClick={handleAddToCartClick}
                    className={cx(
                        'mt-3 py-1 rounded-sm mr-3 text-sm ',
                        {'d-flex justify-content-center': !addToCartLoading},
                        {'opacity-50 cursor-not-allowed': addToCartLoading}
                    )}
                >

				{ addToCartLoading ? 'Adding to cart...' : <p className="px-8 py-3 theme bg-color-2 color-white font-weight-600">ADD TO CART</p>}
                </button>
            }
            {showViewCart ? (
                <Link href="/cart">
                    <button
                        className="px-3 py-1 rounded-sm text-sm border-solid border border-current inline-block">View
                        Cart
                    </button>
                </Link>
            ) : null}
        </div>
    );
};

export default AddToCart;
