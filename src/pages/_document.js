import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <title> CEAS - Centro de Enseñanza Automovilística de Santander </title>
        {/* <link rel="Icon page" href="../img/LogoCeas.jpg" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
