import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface ViaCepResponse {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ViaCepResponse | { error: string }>
) {
  const { cep } = req.query;

  if (!cep) {
    res.status(400).json({ error: "CEP is required" });
    return;
  }

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    const response = await axios.get<ViaCepResponse>(url);

    if (response.data.hasOwnProperty("erro")) {
      throw new Error("CEP not found");
    }
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar dados do CEP" });
  }
}
