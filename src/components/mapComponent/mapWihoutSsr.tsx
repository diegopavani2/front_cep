import React from "react";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("./mapComponent"), {
  ssr: false,
});

interface MapComponentProps {
  resultado: {
    latitude: number;
    longitude: number;
    logradouro: string;
    cidade: string;
    estado: string;
  };
}

const MyMapPage = (props: MapComponentProps) => (
  <MapWithNoSSR resultado={props.resultado} />
);

export default MyMapPage;
