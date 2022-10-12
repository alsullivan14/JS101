function asciiTotal(st) {
    let sum = 0;
    for (let i = 0; i < st.length; i++) {
        sum += st.charCodeAt(i)
    }
    console.log(sum);
};

asciiTotal("Four score");