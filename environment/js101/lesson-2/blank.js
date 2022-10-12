let words = ['go', 'ahead', 'and', 'jump'];

let result = words.slice().sort((a, b) => a.length - b.length);
console.log(result);