import "../src/styles/style.scss";
import "../src/styles/main.scss";
import "../src/styles/bootstrap.min.css";
import "../src/styles/Stylesheet.css";
import "../src/styles/variables.css";
import "../src/styles/custom.css";
import "../fonts/font.css";

import Router from 'next/router';
import NProgress from 'nprogress';
import Layout from "../src/components/Layout";

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp