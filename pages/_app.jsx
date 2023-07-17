import Head from "next/head";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Metaversus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Metaversus UI website" />
      {/** google */}
      <meta itemProp="name" content="Metaversus" />
      <meta itemProp="description" content="Metaversus UI website" />
      <meta
        itemProp="image"
        content="https://metaversus-ui-three.vercel.app/favicon.ico"
      />
      {/** google */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Metaversus" />
      <meta itemProp="twitter:description" content="Metaversus UI website" />
      <meta
        itemProp="twitter:image"
        content="https://metaversus-ui-three.vercel.app/favicon.ico"
      />
    </Head>
    <Component {...pageProps} />
  </>
);
export default MyApp;
