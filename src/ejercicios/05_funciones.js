console.log("Hola Mundo!");

function saludar(nombre) {
  return `Hola ${nombre}`;
}

console.log(saludar("Sopita"));

//Forma muy usada en REACT de funciones y return
// Arrow Functions con RETURN Implicito
const getUserActivo = (nombre) => ({
  uid: "ABC123",
  username: nombre,
});

const usuarioActivo = getUserActivo("Sopita");
console.log(usuarioActivo);
