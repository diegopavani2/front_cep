"use client";
import { useState } from "react";

import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import axios from "axios";

const MapWithNoSSR = dynamic(() => import("../mapComponent/mapComponent"), {
  ssr: false,
});

export const BuscaCepForm: React.FC = () => {
  const [cep, setCep] = useState("");
  const [resultado, setResultado] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const formatarCep = (value: string): string => {
    const apenasNumeros = value.replace(/\D/g, "");
    const cepLimitado = apenasNumeros.slice(0, 8);
    if (cepLimitado.length > 5) {
      return `${cepLimitado.slice(0, 5)}-${cepLimitado.slice(5)}`;
    }
    return cepLimitado;
  };

  const buscarCep = async (cep: string) => {
    setLoading(true);

    try {
      const url = `/api/buscarDados/${cep}`;
      const response = await axios.get(url);

      setResultado({ ...response.data, latitude: -10, longitude: -10 });
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    buscarCep(cep);
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(formatarCep(e.target.value));
  };

  const showResults = !loading && resultado;

  return (
    <div className="flex flex-col items-center mt-2">
      <div
        className="w-full md:w-1/2 p-4 shadow-lg"
        style={{ backgroundColor: "#1F2937" }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <label htmlFor="cep" className="text-lg text-white">
            Digite o CEP:
          </label>
          <input
            type="text"
            id="cep"
            value={cep}
            onChange={handleCepChange}
            className="px-4 py-2 border rounded-lg text-black"
            placeholder="Exemplo: 01001-000"
            maxLength={9}
            disabled={loading}
            required={true}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
            ) : (
              "Buscar"
            )}
          </button>
        </form>
        {showResults && (
          <>
            <div className="mt-4 p-4 bg-white rounded-lg shadow-md text-black">
              <h3 className="text-lg font-semibold">Resultado da Busca:</h3>
              <p>
                <strong>CEP:</strong> {resultado.cep}
              </p>
              <p>
                <strong>Logradouro:</strong> {resultado.logradouro}
              </p>
              <p>
                <strong>Bairro:</strong> {resultado.bairro}
              </p>
              <p>
                <strong>Cidade:</strong> {resultado.cidade}
              </p>
              <p>
                <strong>Estado:</strong> {resultado.estado}
              </p>
            </div>

            <div
              style={{ height: "400px", width: "100%", overflow: "hidden" }}
              className="mt-4 bg-white rounded-lg shadow-md"
            >
              <MapWithNoSSR
                resultado={{
                  latitude: resultado.latitude,
                  longitude: resultado.longitude,
                  logradouro: resultado.logradouro,
                  cidade: resultado.cidade,
                  estado: resultado.estado,
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
