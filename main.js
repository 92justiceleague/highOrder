'use strict';
// $ Current Conversion Rate for $ to Euros
const dollarToEuro = 0.97434895;

// $ An array of transactions.
const transactions = [
  650.6, -24.54, -300.12, 986.17, 1000, -65.43, 250, -118.46,
];

// $ USD International Number Format options
const usNumOptions = {
  style: 'currency',
  currency: 'USD',
};

// $ German Euro International Number Format Options
const deNumOptions = {
  style: 'currency',
  currency: 'EUR',
};

// $ Using the .map() method to create an array with converted numbers
// $ to strings that are formatted to USD

const transactionsUSD = transactions.map((transaction) =>
  new Intl.NumberFormat('en-US', usNumOptions).format(transaction)
);
console.log(
  `An array of transactions converted to strings and converted to USD currency format.`
);
console.log(transactionsUSD);

// $ Using the .map() to create an array of transaction amounts converted from dollars to euros.
const transactionsEuro = transactions.map((transaction) =>
  new Intl.NumberFormat('de-DE', deNumOptions).format(
    transaction * dollarToEuro
  )
);
console.log(
  `An array of transactions that have been converted to strings and formatted to German Euros.`
);
console.log(transactionsEuro);

// $ Using the .filter() method to create an array of only the withdrawals.
const withdrawals = transactions.filter((transaction) => transaction < 0);
console.log(`An array of negative transactions.`);
console.log(withdrawals);


//$ Chaining the .filter(), .map() and .reduce() methods to get the balance of
//$ all of the deposits.
const sumDepositsEuro = new Intl.NumberFormat('de-EU', deNumOptions).format(
  transactions
    .filter((transaction) => transaction > 0)
    .map((transaction) => transaction * dollarToEuro)
    .reduce((acc, cur) => acc + cur)
);

console.log('Sum of all deposits converted to Euros.');
console.log(sumDepositsEuro);