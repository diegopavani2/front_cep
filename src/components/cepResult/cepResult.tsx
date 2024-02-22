import { FunctionComponent } from "react";

import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import axios from "axios";

const MapWithNoSSR = dynamic(() => import("../mapComponent/mapComponent"), {
  ssr: false,
});

interface propsCepResult {
  cep: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
  latitude: number;
  longitude: number;
  tipoLogradouro: string;
}

export const CepResult: FunctionComponent<propsCepResult> = ({
  cep,
  logradouro,
  bairro,
  cidade,
  estado,
  latitude,
  longitude,
  tipoLogradouro,
}) => {
  return (
    <>
      <div className="mt-4 p-4 bg-white rounded-lg shadow-md text-black">
        <h3 className="text-lg font-semibold">Resultado da Busca:</h3>
        <p>
          <strong>CEP:</strong> {cep}
        </p>
        <p>
          <strong>Logradouro:</strong> {`${tipoLogradouro} ${logradouro}`}
        </p>
        <p>
          <strong>Bairro:</strong> {bairro}
        </p>
        <p>
          <strong>Cidade:</strong> {cidade}
        </p>
        <p>
          <strong>Estado:</strong> {estado}
        </p>
      </div>

      <div
        style={{ height: "400px", width: "100%", overflow: "hidden" }}
        className="mt-4 bg-white rounded-lg shadow-md"
      >
        <MapWithNoSSR
          resultado={{
            latitude,
            longitude,
            logradouro,
            cidade,
            estado,
          }}
        />
      </div>
    </>
  );
};
