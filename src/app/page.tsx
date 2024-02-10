import { BuscaCepForm } from "@/components/buscaCepForm/buscaCepForm";
import { Header } from "@/components/header/header";
import mixpanel from "mixpanel-browser";

export default function Home() {
  mixpanel.track("Page view", {});
  return (
    <>
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
