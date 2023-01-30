// Variables

var a; // Declaración de variables
var b = "b"; // Declaración y asignación de variables
b = "bb"; // Resignación de una variables
var a = "aa"; // Redeclaración de una variables

/*
Global Scope

Son variables que se instancian en el objeto de window y todo el codigo tiene
acceso a estas variables.

Se declaran normalmente al inicio del documento o por fuera de funciones,
bloques, etc.
*/

var fruit = "Apple"; // Varibale global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  /* Asignacion  de una variable que nunca se ha declarado
  JS por defecto hace de esas variables, variables globales,
  por lo que se puede acceder a ella desde afuera y hay qye tener cuidado con eso

  Si se declara con var, const o let, ahi si no se vuelven globales
  */  
  country = "Colombia"; 
  console.log(country);
}

countries()
// Se accede a la variable country desde fuera
console.log(country)