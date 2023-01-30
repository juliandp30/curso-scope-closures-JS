const myGlobal = 0;

function myFunc() {
  const myNumber = 1;

  console.log(myGlobal);

  function parent() {
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }
    return child();
  }
  return parent();
}

/*
El ambito lexito significa que la accesibilidad de las variables
esta determinada por la posición de las mismas dentro de las funciones
o ambitos anidados
*/