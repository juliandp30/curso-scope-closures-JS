function greeting() {
  let userName = "Julian";

  function displayUserName() {
    return `Hello ${userName}`;
  }
  return displayUserName;
}

const g = greeting()
console.log(g); // [Function: displayUserName]
console.log(g()); // Hello Julian