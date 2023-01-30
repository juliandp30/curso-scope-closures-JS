// Redeclaración y reasignación

// Empleando var
var firstName; // Cuando se declara, se inicia con un valor de
firstName = "Julian";

var lastName = "Parra"; // Declarando y asignando
lastName = "Cardona"; // Reasignar

var secondName = "David";
var secondName = "Andres"; //Redeclaración y reasignación

// Empleando let
let fruit = "Apple";
fruit = "Kiwi"; // Reasignar

let fruit = "Banana"; // No se puede redeclarar una variable let

// Empleando const
const animal = "dog";
animal = "cat"; // No se puede reasignar una variable const

const animal = 'snake' //  No se puede redeclarar una variable const

// las variables const si permiten modificar los arreglos u objetos de la referencia
const vehicles = [];
vehicles.push('mazda')
