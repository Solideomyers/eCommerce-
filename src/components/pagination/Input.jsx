import PropTypes from "prop-types";

export const Input = ({ input, handleChangeInput, handleKeyDown, max }) => {
  return (
    <div className="flex items-center justify-center w-full py-2 px-3 rounded-full transition-shadow">
      {/* Mejora 1: Ajuste de tamaño de texto en dispositivos móviles */}
      <label className="text-white font-bold mr-2 sm:text-base">Pagina</label>
      <input
        type="text"
        maxLength="2"
        name="page"
        autoComplete="off"
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
        value={input}
        // handleKeyDown sea opcional en PropTypes
        className="px-2 py-0 border-gray-300 w-16 text-center focus:outline-none focus:ring focus:border-primary rounded-full transform transition-transform hover:scale-105 sm:text-base"
      />
      <span className="text-white ml-2 sm:text-base">de {max}</span>
    </div>
  );
};

Input.propTypes = {
  input: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func,
  max: PropTypes.number.isRequired,
};
