import Script from "next/script";
import "../app/globals.css";
import mixpanel from "mixpanel-browser";

// @ts-ignore
function MyApp({ Component, pageProps }) {
  mixpanel.init("3123dfec454ea69f5e65f6d8498b918a", {
    debug: false,
    track_pageview: true,
    persistence: "localStorage",
    ignore_dnt: true,
  });

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KNW3V6JX');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
