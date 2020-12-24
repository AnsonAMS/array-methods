const scores = [10, 30, 15, 25, 50, 40, 5];

// filter all results above 20 and put these in new array filteredScores
const filteredScores = scores.filter((score) => {
    return score > 20;
});

console.log(scores)