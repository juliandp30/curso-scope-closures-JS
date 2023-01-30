/*
function moneyBox(coins) {
  let saveCoins = 0;
  saveCoins += coins;

  console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5) // 5
moneyBox(5) // 5

No se esta guardando el valor que ya tenia... se arreglara con una closure
*/

function moneyBox() {
  let saveCoins = 0;

  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5); // $5
myMoneyBox(5); // $10
myMoneyBox(15); // $25

const moneyBoxAna = moneyBox();
moneyBoxAna(10); // $10
moneyBoxAna(20); // $30
moneyBoxAna(5); // $35
