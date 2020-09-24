console.log("Hola Mundo!");

// const array100 = new Array(100);
// console.log(array100);

const array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);

let array2 = [...array, 5];
// Se recomienda utilizar el operador spread para agregar nuevos valores al array, y no utilizar .push()
// Al igual que en el ejercicio de objetos, el operador spread crea una copia de lo que se referencia.

const array3 = array2.map((numero) => {
  return numero * 3;
});
// El metodo map devuelve un array nuevo, por eso se lo tiene que asignar a una variable.

console.log(array);
console.log(array2);
console.log(array3);
