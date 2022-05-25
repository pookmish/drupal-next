import {AppProps} from "next/app"
import App from "next/app"
import "styles/globals.css"
import {getMenu, getResource} from "next-drupal";

const DrupalApp = ({Component, pageProps}: AppProps) =>{
  return <Component {...pageProps} />
}

DrupalApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const {tree} = await getMenu('main');
  const globalSettings = {
    menu: tree
  };

  globalSettings.lockupSettings = await getResource(
    "config_pages--lockup_settings", '',
  );

  globalSettings.basicSiteSettings = await getResource(
    "config_pages--stanford_basic_site_settings", '',
  );

  globalSettings.superFooter = await getResource(
    "config_pages--stanford_super_footer", '',
  );

  globalSettings.localFooter = await getResource(
    "config_pages--stanford_local_footer", '',
  );
  appProps.pageProps.globalSettings = globalSettings;
  return { ...appProps }
}

export default DrupalApp;
