import { FunctionComponent } from "react";

import "leaflet/dist/leaflet.css";
import MapComponent from "../mapComponent/mapComponent";

interface propsCepResult {
  cep: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
  latitude: number;
  longitude: number;
}

export const CepResult: FunctionComponent<propsCepResult> = ({
  cep,
  logradouro,
  bairro,
  cidade,
  estado,
  latitude,
  longitude,
}) => {
  return (
    <>
      <div className="mt-4 p-4 bg-white rounded-lg shadow-md text-black">
        <h3 className="text-lg font-semibold">Resultado da Busca:</h3>
        <p>
          <strong>CEP:</strong> {cep}
        </p>
        <p>
          <strong>Logradouro:</strong> {logradouro}
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
        <MapComponent
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
