const readline = require("readline-sync");

const DECK = [];
const PLAYER_HAND = [];
const DEALER_HAND = [];
const TWENTY_ONE = 21;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function initializeDeck(deck) {
  let suits = ["S", "H", "D", "C"];
  let values = ["1", "2", "3", "4", "5", "6", "7",
    "8", "9", "10", "J", "Q", "K", "A"];
  for (let indexOfSuits = 0; indexOfSuits < suits.length; indexOfSuits++) {
    for (let indexOfValue = 0; indexOfValue < values.length; indexOfValue++) {
      deck.push([suits[indexOfSuits], values[indexOfValue]]);
    }
  }
  return deck;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}

function dealCards(deck, hand) {
  let firstCard = deck.pop();
  let secondCard = deck.pop();
  return hand.push(firstCard, secondCard);
}

function displayCards(playerHand, dealerHand, cardFaceDown = true) {
  let playerCardValues = playerHand.map(subarray => subarray[1]);
  let dealerCardValues = dealerHand.map(subarray => subarray[1]);
  if (cardFaceDown) {
    dealerCardValues[1] = "Unknown Card";
  }
  prompt(`Dealer has: ${dealerCardValues.join(", ")}\n=> You have: ${playerCardValues.join(", ")}`);
}

function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function hit(hand) {
  let nextCard = DECK.pop();
  // Do I need to pass deck as argument?
  return hand.push(nextCard);
}

function twentyOne(hand) {
  return total(hand) === TWENTY_ONE;
}

function busted(hand) {
  return total(hand) > TWENTY_ONE;
}

function displayWinner(person) {
  prompt(`The winner is ${person}!!`);
}

function playersTurn(hand) {
  prompt("Hit or stay?");
  let answer = readline.question();
  if (answer === "stay") {
    return answer;
  } else {
    hit(hand);
    return answer;
  }
}

function dealersTurn(hand) {
  while (total(hand) < 17) {
    hit(hand);
    prompt("The dealer hit");
  }
  return total(hand);
}

function bustOrTwentyOne(hand) {
  if (busted(hand)) {
    return -1;
  } else if (twentyOne(hand)) {
    return 1;
  }
  return 0;
}


while (true) {
  let choice;
  let winner;
  initializeDeck(DECK);
  // Initialize deck
  shuffle(DECK);
  // Shuffle
  dealCards(DECK, PLAYER_HAND);// Can I change function to deal initial cards to both hands
  // Deal cards to player
  dealCards(DECK, DEALER_HAND);
  // Deal cards to dealer
  displayCards(PLAYER_HAND, DEALER_HAND);
  // Display each hand
  choice = playersTurn(PLAYER_HAND);
  while (choice !== "stay") {
    if (bustOrTwentyOne(PLAYER_HAND)) {
      displayCards(PLAYER_HAND, DEALER_HAND, false);
      winner = bustOrTwentyOne(PLAYER_HAND) === 1 ? "Player" : "Dealer";
      displayWinner(winner);
      return;
    } else {
      displayCards(PLAYER_HAND, DEALER_HAND);
      choice = playersTurn(PLAYER_HAND);
    }
  }
  // Player chose stay
  if (bustOrTwentyOne(PLAYER_HAND)) {
    displayCards(PLAYER_HAND, DEALER_HAND, false);
    winner = bustOrTwentyOne(PLAYER_HAND) === 1 ? "Player" : "Dealer";
    displayWinner(winner);
  } else {
    dealersTurn(DEALER_HAND);
    if (bustOrTwentyOne(DEALER_HAND)) {
      displayCards(PLAYER_HAND, DEALER_HAND, false);
      winner = bustOrTwentyOne(DEALER_HAND) === 1 ? "Dealer" : "Player";
      displayWinner(winner);
    } else {
      displayCards(PLAYER_HAND, DEALER_HAND, false);
      winner = total(PLAYER_HAND) > total(DEALER_HAND) ? "Player" : "Dealer";
      displayWinner(winner);
    }
  }
  return;
}


