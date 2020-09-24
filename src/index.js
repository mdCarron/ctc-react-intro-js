import { heroes } from "./data/heroes";
// Version Larga
/* 
const getHeroeById = (id) => {
  return heroes.find((heroe) => {
    if (heroe.id === id) {
      return true;
    } else {
      return false;
    }
  });
};
 */

// Version Corta
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
const getHeroeByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroeById(3));
console.log(getHeroeByOwner("Marvel"));
