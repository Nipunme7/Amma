import Document, { Html, Head, Main, NextScript } from "next/document";
import getConfig from "next/config";

export default class MyDocument extends Document {
  render() {
    const { publicRuntimeConfig } = getConfig();
    const basePath = publicRuntimeConfig?.basePath ?? "";

    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href={`${basePath}/balloon.png`}
            type="image/x-icon"
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
