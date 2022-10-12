/* 
Process: input-user input of an array with parts of a name and an object with keys title and occupation
         output-return greeting that mentions full name and title of person
Data Structure: one array and one object as input, return string as output
Algorithm: using index loop through parts of array separated by string in first sentence. return attributes of object in second sentence.
*/

function greet(arr, obj) {
    let index = 0;
    let firstSentence = "Hi"
    while (index < arr.length) {
        firstSentence += " " + arr[index];
        index += 1;
    }
    console.log(firstSentence + ". " + "Do you enjoy being a " + obj.title + " " + obj.occupation + "?");
}

greet(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });