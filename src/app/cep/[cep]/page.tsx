import { notFound } from "next/navigation";
import Head from "next/head";

import { BuscaCepForm } from "@/components/buscaCepForm/buscaCepForm";
import { CepNotFound } from "@/components/cepNotFound/cepNotFound";
import { CepResult } from "@/components/cepResult/cepResult";
import { Header } from "@/components/header/header";

interface CepProps {
  params: {
    cep: string;
  };
}

export default async function New({ params }: CepProps) {
  const credentials = `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`;
  const base64Credentials = btoa(credentials);


  const response = await fetch(`${process.env.API_LINK}/cep/${params.cep}`, {
    headers: {
      Authorization: `Basic ${base64Credentials}`,
    },
    next: {
      revalidate: 160,
    },
  });

  const dataResponse = await response.json();

  const pageTitle = dataResponse.cep
    ? `Informações do CEP ${dataResponse.cep}`
    : "CEP não encontrado";
  const pageDescription = dataResponse.cep
    ? `Detalhes do CEP ${dataResponse.cep}: ${dataResponse.logradouro}, ${dataResponse.bairro}, ${dataResponse.cidade}, ${dataResponse.estado}.`
    : "A busca pelo CEP não retornou resultados.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://buscadecep.com.br/cep/${dataResponse.cep}`}
        />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:url"
          content={`https://buscadecep.com.br/cep/${dataResponse.cep}`}
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
          <BuscaCepForm precep={dataResponse.cep} />
          {!dataResponse.cep ? (
            <CepNotFound />
          ) : (
            <CepResult
              cep={dataResponse.cep}
              logradouro={dataResponse.logradouro}
              bairro={dataResponse.bairro?.nome}
              cidade={dataResponse.cidade?.nome}
              estado={`${dataResponse.estado?.nome} - ${dataResponse.estado?.uf}`}
              latitude={dataResponse.latitude}
              longitude={dataResponse.longitude}
            />
          )}
        </div>
      </div>
    </>
  );
}
