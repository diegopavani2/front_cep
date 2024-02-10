import "../../app/globals.css";
export const Header = () => (
  <header>
    <nav className="border-gray-200 px-4 lg:px-6 md:px-6 py-2.5 bg-gray-800">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="#" className="flex items-center">
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
);
