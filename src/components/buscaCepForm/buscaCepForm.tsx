"use client";
import { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
interface propsFormCep {
  precep?: string;
}

export const BuscaCepForm: FunctionComponent<propsFormCep> = ({ precep }) => {
  const [cep, setCep] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (precep) {
      setCep(precep);
      setLoading(false);
    }
  }, [precep]);

  const formatarCep = (value: string): string => {
    const apenasNumeros = value.replace(/\D/g, "");
    const cepLimitado = apenasNumeros.slice(0, 8);
    if (cepLimitado.length > 5) {
      return `${cepLimitado.slice(0, 5)}-${cepLimitado.slice(5)}`;
    }
    return cepLimitado;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (precep && formatarCep(precep) !== formatarCep(cep)) {
      setLoading(true);
      router.push(`/cep/${cep}`);
    }
    if (!precep) {
      setLoading(true);
      router.push(`/cep/${cep}`);
    }
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(formatarCep(e.target.value));
  };

  return (
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
  );
};
