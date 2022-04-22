import {AppProps} from "next/app"
import "styles/globals.css"

const DrupalApp = ({Component, pageProps}: AppProps) =>{
  return <Component {...pageProps} />
}

export default DrupalApp;
