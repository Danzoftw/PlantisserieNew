import Head from "next/head";
import { AppProvider } from "../context/AppContext";
import Navigation from "./Header/Navigation";
import Footer from "./Footer/Footer";
import client from "../ApolloClient";
import Router from "next/router";
import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/client";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Layout = ( props ) =>{
  console.warn('children', props.data);
  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <div>
          <Head>
            <title>Plantisserie</title>
          </Head>
          <Navigation data={props.data} />
          {props.children}
          <Footer />
        </div>
      </ApolloProvider>
    </AppProvider>
  );
};

export default Layout;