import { BuscaCepForm } from "@/components/buscaCepForm/buscaCepForm";
import { Header } from "@/components/header/header";

export default function Home() {
  console.log("carregando site");
  return (
    <>
      <Header />
      <div className="flex flex-col items-center mt-2">
        <div
          className="w-full md:w-8/12 lg:w-6/12 p-4 shadow-lg"
          style={{ backgroundColor: "#1F2937" }}
        >
          <BuscaCepForm />
        </div>
      </div>
    </>
  );
}
