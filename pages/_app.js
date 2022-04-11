import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from 'next/router';

const progress = new ProgressBar( {
  size: 1,
  color: "#FE595E",
  className: ' z-50',
  delay: 80,

})
Router.events.on('routeChangeStart',progress.start)
Router.events.on('routerChangeComplete', progress.finish)
Router.events.on('hashChangeComplete', progress.finish)
Router.events.on('beforeHistoryChange', progress.finish)


Router.events.on('routerChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
