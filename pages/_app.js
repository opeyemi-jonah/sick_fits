import Page from "../components/Page";
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css';
import { ApolloProvider } from "@apollo/client";
import withData from "../lib/withData";

Router.events.on('routerChangeStart', ()=> NProgress.start());
Router.events.on('routerChangeComplete', ()=> NProgress.done());
Router.events.on('routerChangeError', ()=> NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  console.log(apollo)
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>      
    </ApolloProvider>

    )
}

export default withData(MyApp)
