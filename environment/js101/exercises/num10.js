function sumMultiples (integer) {
    let result = 0;
    let listMultiples = [];
    let index = 0;
    while (index <= integer) {
        if (index % 3 === 0 || index % 5 === 0){
            listMultiples.push(index);
        }
        index++;
    }
    for (let x in listMultiples) {
       result += listMultiples[x];
    }
    console.log(result);
};

sumMultiples(20);
sumMultiples(15);
sumMultiples(10);