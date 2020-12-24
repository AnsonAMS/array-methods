const scores = [10, 30, 15, 25, 50, 40, 5];

// filter all results above 20 and put these in new array filteredScores
// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });

// console.log(scores);

// filter all premium users and put these in a new array premiumUsers

const users = [
    {name: 'Shaun', premium: true},
    {name: 'Yoshi', premium: false},
    {name: 'Mario', premium: false},
    {name: 'Chun-Li', premium: true}
];

const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);