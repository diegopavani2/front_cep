import { BuscaCepForm } from "@/components/buscaCepForm/buscaCepForm";
import { Fragment, useState } from "react";

export default function Home() {
  return (
    <>
      <header>
        <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              <img
                src="https://github-production-user-asset-6210df.s3.amazonaws.com/118756334/303679577-c00e1070-7640-458d-b915-16214ae117b8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240209T143159Z&X-Amz-Expires=300&X-Amz-Signature=5185da3e2600097c59a4d6b66c3c9101190e398a63a6f0a5d7fcfe3b615a9064&X-Amz-SignedHeaders=host&actor_id=118756334&key_id=0&repo_id=707206646"
                className="mr-3 h-6 sm:h-9"
                alt="Buscar um cep logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                Buscar um cep
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="#"
                className="text-black bg-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none"
              >
                API DE CEP PREMIUM
              </a>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Buscar endereço usando cep
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Buscar cep por endereço
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <BuscaCepForm />
    </>
  );
}
