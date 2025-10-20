import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favico.ico" />
        <link rel="shortcut icon" href="/favico.ico" />
        <meta name="description" content="Mainstack - Revenue Dashboard" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
