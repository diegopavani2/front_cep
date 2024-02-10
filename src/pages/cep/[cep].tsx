import { BuscaCepForm } from "@/components/buscaCepForm/buscaCepForm";
import { CepNotFound } from "@/components/cepNotFound/cepNotFound";
import { CepResult } from "@/components/cepResult/cepResult";
import { Header } from "@/components/header/header";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { FunctionComponent } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  console.log("params", params);
  const response = await fetch(`${process.env.API_LINK}/cep/${params?.cep}`);
  const post = await response.json();

  return {
    props: {
      post,
      params,
    },
  };
};
interface CepPageProps {
  post: any;
  params: any;
}
const CepPage: FunctionComponent<CepPageProps> = ({ post, params }) => {
  const pageTitle = post.cep
    ? `Informações do CEP ${post.cep}`
    : "CEP não encontrado";
  const pageDescription = post.cep
    ? `Detalhes do CEP ${post.cep}: ${post.logradouro}, ${post.bairro}, ${post.cidade}, ${post.estado}.`
    : "A busca pelo CEP não retornou resultados.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://buscadecep.com.br/cep/${params.cep}`}
        />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:url"
          content={`https://buscadecep.com.br/cep/${params.cep}`}
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>
      <Header />
      <div className="flex flex-col items-center mt-2">
        <div
          className="w-full md:w-8/12 lg:w-6/12 p-4 shadow-lg"
          style={{ backgroundColor: "#1F2937" }}
        >
          <BuscaCepForm precep={params.cep} />
          {!post.cep ? (
            <CepNotFound />
          ) : (
            <CepResult
              cep={post.cep}
              logradouro={post.logradouro}
              bairro={post.bairro}
              cidade={post.cidade}
              estado={post.estado}
              latitude={post.latitude}
              longitude={post.longitude}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CepPage;
