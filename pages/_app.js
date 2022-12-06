import Page from "../components/Page";
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css';

Router.events.on('routerChangeStart', ()=> NProgress.start());
Router.events.on('routerChangeComplete', ()=> NProgress.done());
Router.events.on('routerChangeError', ()=> NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
  <Page>
    <Component {...pageProps} />
  </Page>
    )
}

export default MyApp
