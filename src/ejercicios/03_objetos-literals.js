console.log("Hola Mundo!");

const persona = {
  nombre: "Sopita",
  apellido: "Quick",
  edad: 327,
  domicilio: {
    ciudad: "Carlin",
    zona: "Norte Mainland",
  },
};

const persona2 = { ...persona }; //Crea un nuevo objeto asignado a su propio espacio de memoria, y evita el peligro de refenciar y asignar nuevos valos al objeto de referencia.

persona2.nombre = "Chocolinas";

console.log(persona);
console.log(persona2);
