import { getHeroeById } from "./08_imp-exp.js";
/* 
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(3);
    resolve(heroe);
  }, 2000);
});

promesa
  .then((heroe) => {
    console.log(heroe);
  })
  .catch((error) => {
    console.warn(error);
  });
 */

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("Hubo un error.");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(1).then(console.log).catch(console.warn);
