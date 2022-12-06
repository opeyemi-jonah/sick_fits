import Document, {Html, Head, NextScript, Main} from 'next/document';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    // static async getInitialProps({renderPage}){
    //     const initialProps = await Document.getInitialProps({renderPage})
    //     const sheet = new ServerStyleSheet();
    //     console.log(sheet)
    //     const page = renderPage(
    //         (App) => (props) => sheet.collectStyles(<App {...props} />)
    //     );

    //     const styleTags = sheet.getStyleTags();

    //     return {...initialProps}
    // }
    static getInitialProps = async (ctx) => {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
      
        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });
      
          const initialProps = await Document.getInitialProps(ctx);
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ),
          };
        } finally {
          sheet.seal();
        }
      };
      
    render() {
        return (
        <Html lang= "en-US">
            <Head />
            <body>
                <Main />
                <NextScript />                
            </body>
        </Html>            
        )

    }
}