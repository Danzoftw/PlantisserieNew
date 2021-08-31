import Layout from "../src/components/Layout";
import GET_POSTS from '../src/queries/get-posts';
import client from "../src/components/ApolloClient";
import React, { Component, useEffect, useRef, useState  } from "react";
import { Button , Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image'
import Link from 'next/link';
import {isEmpty} from 'lodash';
import Blog from '../src/components/Blog';
import Script from 'next/script';

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}


export default function gardenia({allItems})  {

    // const [name, setName] = useState('Vaibhav');

    return (
        <Layout>
          <Blog allItems={allItems}/>
          <div className="razorpay-method">
            <Container>
              <Row>
                <Col xs={12}>
                  <div>
                  {/* <a
                    className="App-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate $5
                  </a> */}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Layout>
    )
}

export const getStaticProps = async () => {

	const { data } = await client.query( {
		query: GET_POSTS,
	} );
	return {
		props: {
          allItems : { postItems: data?.postItems?.edges, multiPostItems: data?.multiPostItems?.edges }
		},
		revalidate: 1
	};
};
