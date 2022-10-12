function shortLongShort (first, second) {
    if (first.length > second.length) {
        console.log(second + first + second);
    } else {
        console.log(first + second + first);
    }
};

shortLongShort("Gamma", "Beta");
shortLongShort("Delta", "Gamma");