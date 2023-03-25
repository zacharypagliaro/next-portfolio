import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" id="gtm-script"></Script>
      <Script id="ga-script">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>


      <Component {...pageProps} />
    </>
  );
}
