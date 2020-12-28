// const scores = [10, 30, 15, 25, 50, 40, 5];

// filter all results above 20 and put these in new array filteredScores
// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });

// console.log(scores);

// filter all premium users and put these in a new array premiumUsers

// const users = [
//     {name: 'Shaun', premium: true},
//     {name: 'Yoshi', premium: false},
//     {name: 'Mario', premium: false},
//     {name: 'Chun-Li', premium: true}
// ];

// const premiumUsers = users.filter(user => user.premium);

// console.log(premiumUsers);

// map method divide all numbers by 2

// const prices = [ 20, 10, 30, 25, 15, 40, 80, 5 ];

// const salePrices = prices.map(price => price / 2);

// console.log(salePrices);

// const products = [
//     { name: "gold star", price: 20 },
//     { name: "mushroom", price: 40 },
//     { name: "green shells", price: 30 },
//     { name: "banana skin", price: 10 },
//     { name: "red shells", price: 50 }
// ];

// const saleProducts = products.map(product => {
//     if (product.price > 30) {
//         return { name: product.name, price: product.price / 2 };
//     } else {
//         return product;
//     }
// })

// console.log(saleProducts, products)

// reduce method how many times did Lewandowski score more than 3 or more goals per game? 

// const goalsScoredByLewandowski = [ 3, 2, 1, 1, 0, 5, 4, 3 ];

// const threeOrMoreGoalsPerGame = goalsScoredByLewandowski.reduce((acc, curr) => {
//     if (curr >= 3) {
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(threeOrMoreGoalsPerGame);

// find method What is the highest number of assists Neymar gave?

// const assistsByNeymar = [ 0, 1, 2, 3, 0, 4, 1 ];

// const highestNumberOfAssistsByNeymar = assistsByNeymar.find(assists => assists > 3 );

// console.log(highestNumberOfAssistsByNeymar);

// sort method with strings

// const names = [ "Sam Flynn", "Kevin Flynn", "Quorra", "CLU", "Rinzler", "Gem" ];

// const sortedNames = names.sort(); 

// console.log(sortedNames);

// sort method with numbers from lowest to highest number

const savesPerGameByNeuer = [ 3, 9, 8, 2, 0, 5, 7, 3, 2, 0, 1, 4, 3, 1 ];

const sortedSavesPerGameByNeuer = savesPerGameByNeuer.sort();

console.log(sortedSavesPerGameByNeuer);

