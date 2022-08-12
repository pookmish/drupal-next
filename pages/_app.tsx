import App, {AppProps} from "next/app"
import {getMenu} from "next-drupal";

import {AppWrapper} from "../context/state";
import "styles/globals.css"

function DrupalApp({Component, pageProps}: AppProps) {

  return (
    <AppWrapper menu={pageProps.menu}>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

DrupalApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const {tree} = await getMenu('main');
  appProps.pageProps.menu = tree;
  return {...appProps}
}
export default DrupalApp;
