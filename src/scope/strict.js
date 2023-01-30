/* 
El modo estricto se incorporo en ECMAScript 5
y permite incorporar unas reglas para tener mucho mejor control
de la asignación de las variables.

*/

"use strict";
// Variable sin declarar... se agina directamente
pi = 3.1416;
console.log(pi);
/* Error!, pi no esta definido, si no se hubiera puesto
el strict, JS hubiera declarado la variable con var y 
se hubier impreso el pi normal
*/

// El modo estricto tambien se puede activar dentro de funciones o bloques
function myFunc() {
  "use strict";
  return pi = 3.1416
}
console.log(pi);
// Error!, pi no esta definido

