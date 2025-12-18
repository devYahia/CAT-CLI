let input = ["code", "backend", "ai", "circle"]
let Output = input.reduce( function (acc , curr) {
return acc.length < curr.length ? acc : curr;
});
console.log(`${Output}`);
