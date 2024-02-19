// pages/cep/[...params].tsx
import { GetServerSideProps } from "next";
import Head from "next/head";
import { FunctionComponent } from "react";
import mixpanel from "mixpanel-browser";

import { BuscaCepForm } from "@/components/buscaCepForm/buscaCepForm";
import { CepNotFound } from "@/components/cepNotFound/cepNotFound";
import { CepResult } from "@/components/cepResult/cepResult";
import { Header } from "@/components/header/header";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const cep = context.params?.cep[0];

  if (!cep) {
    return {
      notFound: true,
    };
  }

  const credentials = `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`;
  const base64Credentials = btoa(credentials);

  const response = await fetch(`${process.env.API_LINK}/cep/${cep}`, {
    headers: {
      Authorization: `Basic ${base64Credentials}`,
    },
    next: {
      revalidate: 2592000,
    },
  });
  const post = await response.json();

  return {
    props: {
      post,
      cep,
    },
  };
};

interface CepPageProps {
  post: any;
  cep: string;
}

const CepPage: FunctionComponent<CepPageProps> = ({ post, cep }) => {
  const pageTitle = post.cep
    ? `Informações do CEP ${post.cep}`
    : "CEP não encontrado";
  const pageDescriptionParts = [
    post.cep && `Detalhes do CEP ${post.cep}`,
    post.logradouro && `${post.tipoLogradouro} ${post.logradouro}`,
    post.bairro?.nome && post.bairro.nome,
    post.cidade?.nome && post.cidade.nome,
    post.estado?.nome && post.estado?.nome,
    post.estado?.uf && post.estado?.uf,
  ].filter(Boolean);

  const pageDescription =
    pageDescriptionParts.length > 0
      ? pageDescriptionParts.join(", ")
      : "A busca pelo CEP não retornou resultados.";

  mixpanel.track("Cep Search", {
    cep: post?.cep,
    bairro: post.bairro?.nome,
    cidade: post.cidade?.nome,
    estado: post.estado?.uf,
  });

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://buscadecep.com.br/cep/${cep}`} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:url"
          content={`https://buscadecep.com.br/cep/${cep}`}
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
          <BuscaCepForm precep={cep} />
          {!post.cep ? (
            <CepNotFound />
          ) : (
            <CepResult
              cep={post.cep}
              logradouro={post.logradouro}
              bairro={post.bairro?.nome}
              cidade={post.cidade?.nome}
              estado={`${post.estado?.nome} - ${post.estado?.uf}`}
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
