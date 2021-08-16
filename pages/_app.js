import "../styles/globals.css";
import store from "../components/store";
import { Provider } from "react-redux/";
import NProgress from "nprogress";
import Head from "next/head";
import router from 'next/router'

  

function MyApp({ Component, pageProps }) {

  router.events.on("routeChangeStart", (url) => {
    NProgress.start();
  });
  router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
  });


  return (
    <>
    <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
