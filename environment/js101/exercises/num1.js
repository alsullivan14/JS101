function isOdd(int) {
    if (Math.abs(int) === 0 || Math.abs(int) % 2 === 0) {
        console.log(false);
    } else {
        console.log(true);
    }
};

isOdd(0);
isOdd(4);
isOdd(5);