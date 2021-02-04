/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = (l1, l2) => l1 * l2;

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = ( x , y ) => {
    if (x === y){
        return (x + y) * 3;
    } else {
        return x + y;
    }
};

console.log(crazySum(10,1))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = (num) =>{
if (num <= 19) {
    return 19- num;
} else {
    return (num - 19) * 3; //
}
}

console.log(crazyDiff(10))
console.log( crazyDiff(89))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = (integer) => {
    return (integer > 20 && integer <= 100) || integer === 400 ? true : false;
}

console.log(boundary(25));

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = (s) =>{
    const result = (s +"trive");
    if (s.startsWith("Strive")) {
        return s
    } else {
        return result
    }
}

console.log(strivify("s"));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = () => {
    
}

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = (str) => {
    return str.split("").reverse().join("");
}

console.log(reverseString("strive"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = (str) => {
    const split = str.split(" ")
    for (let i = 0; i < split.length; i++) {
        split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
    }
    return split.join(' ');
}

console.log(upperFirst("what are you saying"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = (str) => {
    const split =str.split(" ")
    for (let i = 0; i < split.length; i++) {
        split[i] = split[i].slice(0, -1).substring(1);
        
    }
    return split;
}

console.log(cutString("Hello World"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = (n) => {
    let arrayN = [];
    for (i = 0; i <= n; i++) {
      arrayN.push(Math.floor(Math.random() * 10 + 0));
    }
    return arrayN;
  };
  console.log(giveMeRandom(3));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/