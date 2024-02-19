'use client';
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";

interface MapComponentProps {
  resultado: {
    latitude: number;
    longitude: number;
    logradouro: string;
    cidade: string;
    estado: string;
  };
}

const MapComponent: React.FC<MapComponentProps> = ({ resultado }) => {
  return (
    <div
      style={{ height: "400px", width: "100%", overflow: "hidden" }}
      className="mt-4 bg-white rounded-lg shadow-md"
    >
      <MapContainer
        center={[resultado.latitude, resultado.longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[resultado.latitude, resultado.longitude]}>
          <Popup>
            {resultado.logradouro}
            <br />
            {resultado.cidade}, {resultado.estado}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
