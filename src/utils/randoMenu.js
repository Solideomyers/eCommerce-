export const randomMenu = (array, order) => {
  // Crear una copia del array para no modificar el original
  if (array === undefined) return console.log("No hay categorias");
  let copyArray = [...array];

  // Ordenar de manera aleatoria
  copyArray.sort(() => Math.random() - 0.5);

  // Si order es true, hacer un slice del array
  if (order) {
    copyArray = copyArray.slice(0, 8);
  }

  return copyArray;
};
