// Input ask user for input of noun, verb, adverb and adjective
// Ouput story inserting user inputs in corresponding places

const rl = require('readline-sync');

console.log("Please enter a noun: ");
let noun = rl.prompt();

console.log("Please enter a verb: ");
let verb = rl.prompt();

console.log("Please enter an adverb: ");
let adverb = rl.prompt();

console.log("Please enter an adjective: ");
let adjective = rl.prompt();



function madlib(n, v, ad, a) {
  let story = `  Here there is a noble kingom of Jade plants on which the ${n} plays. \nIf the ${n} is ${ad} pet, it will respond with a ${a} meow.\nIt will then jump down continuing to ${v}.`;
  console.log(story);
}

madlib(noun, verb, adverb, adjective);