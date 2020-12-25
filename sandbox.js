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

const prices = [ 20, 10, 30, 25, 15, 40, 80, 5 ];

const salePrices = prices.map(price => price / 2);

console.log(salePrices);

const products = [
    { name: "gold star", price: 20 },
    { name: "mushroom", price: 40 },
    { name: "green shells", price: 30 },
    { name: "banana skin", price: 10 },
    { name: "red shells", price: 50 }
];

const saleProducts = products.map(product => {
    if (product.price > 30) {
        return { name: product.name, price: product.price / 2 };
    } else {
        return product;
    }
})

console.log(saleProducts, products)