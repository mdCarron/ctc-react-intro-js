console.log("Hola Mundo!");

const persona = {
  nombre: "Sopita",
  apellido: "Quick",
  ciudad: "Thais",
};
// const { nombre, apellido, ciudad } = usuario; //Desestructuracion del objeto

// Desestructuracion en argumento
const useContext = ({ nombre, apellido, ciudad }) => {
  return {
    nombreClave: nombre,
    respawn: ciudad,
    type: {
      profession: "knigth",
      blessing: false,
    },
  };
};
const {
  nombreClave,
  respawn,
  type: { profession, blessing },
} = useContext(persona);

console.log(nombreClave, respawn, profession, blessing);
