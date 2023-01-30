/*
Block Scope

Este concepto se introdujo en EcmaScript 6, cuando llegaron
las palabras reservadas de let y const

Un bloque es todos los fragmentos de codigo que esten dentro de {}

*/

function fruits() {
  if (true) {
    var fruit1 = "Apple"; // Function scope
    let fruit2 = "Kiwi"; // Block scope
    const fruit3 = "Banana"; // Block scope

    console.log(fruit2); // 'Kiwi'
    console.log(fruit3); // 'Banana'
  }

  console.log(fruit1); // 'Apple'
  console.log(fruit2); // Error!!!! fruit2 not defined
  console.log(fruit3); // Error!!!! fruit2 not defined
}

fruits();
