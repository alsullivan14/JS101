// Input id number of inventoryItem and transactions list
// Output true or false based on whether total quantity is greater than zero


// Find all elements with id of n
// Add those elements to a result list
// Using result list assign 'in' as positive quantity, 'out' as negative quantity
// Add together quantities and return number


// For each element in transactions, if element[0] === n add to results
// Use filter


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];


function isItemAvailable(number, transactionList) {
  let result = transactionList.filter(row => {
    if (row.id === number) {
      return row;
    }
  });
  let total = 0;
  result.forEach(row => {
    if (row.movement === "in") {
      total += row.quantity;
    } else {
      total;
    }
  });
  console.log(total > 0 ? true : false);
}

isItemAvailable(103, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]