/*
Function Scope o Local Scope

Todas y cada una de las funcoones que se hacen en la logica, tienen
su propio alcance. las variables declaradas dentro de una función
serán accesibles dentro de esa función y las demas funciones anidadas a ella

*/

function greeting() {
  /*
  La variable userName es accesible unicamente dentro de la funcion
  y los bloques o funciones anidadas
  */  
  let userName = "Ana";
  console.log(userName);

  if (userName === "Ana") {
    console.log(`Hello ${userName}`);
  }
}

greeting();
// Si se quisiera acceder a la variable userName por fuera de su declaración
// no se podria
console.log(userName); // Error!!!!!!!!!!!!!!!!!!