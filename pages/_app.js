import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import OpenGraphImg from 'assets/opengraph.jpg';
import 'styles/styles.scss';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class MyApp extends App {
  static async getInitialProps(props) {
    const { Component, ctx } = props;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>CZODIAC | The First Global Defi Bank</title>
          <meta name="description" content= "Yield from assets backing CZUSD burn CZF with profits building a rising price floor." />
          <meta name="robots" content= "index, follow"></meta>
          <meta property="og:locale" content="en_EN"/>
          
        <meta property="og:title" content="CZODIAC | The First Global Defi Bank" />
        <meta property="og:site_name" content="CZodiac" />
        <meta property="og:url" content="https://czodiac.com" />
        <meta property="og:description" content="Yield from assets backing CZUSD burn CZF with profits building a rising price floor." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={"https://czodiac.com"+OpenGraphImg} />

        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default withRouter(MyApp);
