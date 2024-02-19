import { BuscaCepForm } from "@/components/buscaCepForm/buscaCepForm";
import { Header } from "@/components/header/header";
import mixpanel from "mixpanel-browser";
import Script from "next/script";

export default function Home() {
  mixpanel.init("3123dfec454ea69f5e65f6d8498b918a", {
    debug: false,
    track_pageview: true,
    persistence: "localStorage",
    ignore_dnt: true,
  });

  mixpanel.track("Page view", {});
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
      <Header />
      <div className="flex flex-col items-center mt-2">
        <div
          className="w-full md:w-8/12 lg:w-6/12 p-4 shadow-lg"
          style={{ backgroundColor: "#1F2937" }}
        >
          <h1>
            Buscar por um cep, digite o cep abaixo para buscar o endereço!
          </h1>
          <BuscaCepForm />
        </div>
      </div>
    </>
  );
}
