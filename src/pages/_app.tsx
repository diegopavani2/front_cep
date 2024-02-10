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

  return <Component {...pageProps} />;
}

export default MyApp;
