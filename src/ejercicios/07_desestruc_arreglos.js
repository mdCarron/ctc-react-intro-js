const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes;

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

// TAREA

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = useState("Goku");

console.log(nombre);
setNombre();
