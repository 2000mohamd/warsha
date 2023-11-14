import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html dir="rtl">
        <Head>
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
            rel="stylesheet"
          /> */}
          {/* <link
            href="//db.onlinewebfonts.com/c/679221f7a9b221dc97d009a64ab29e79?family=KarimLTRegular"
            rel="stylesheet"
            type="text/css"
          /> */}

          <link
            rel="preload"
            href="/fonts/Careem-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Careem-Bold.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
