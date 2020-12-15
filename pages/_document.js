import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
            
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script src='https://cdn.paritybar.com/paritybar.js'></script> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument