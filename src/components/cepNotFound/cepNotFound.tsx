export const CepNotFound = () => {
  return (
    <>
      <div
        className="bg-red-100 mt-5 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Ops! </strong>
        <span className="block sm:inline">
          Cep não encontrado, por favor verifique o número digitado
        </span>
      </div>
    </>
  );
};
