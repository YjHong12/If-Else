// if input value is a truthy, print true
// else if value is a boolean, print boolean value false is falsy
// else if value is a null, print null value false is falsy
// else if value is undefined, print undefined is falsy
// else if value is 0, print the number 0 is falsy
// else print empty string is falsy

// if sum + is less than -1000 or a negative number, print negative number 
// else if sum + is equal to 0, print 0 is equal to 0
// else print greater than 0

// if num1 and num2 are greater or equal to 5, print true, else false

// if the two values being compared is a truthy, print true, else false

// Is Truthy
const input = "I am a string"

if (input === "I am a string") {
    console.log("true")
} else if (input === false){
    console.log("The boolean value false is falsy")
} else if (input === null) {
    console.log("The null value is falsy")
} else if (input === undefined) {
    console.log("undefined is falsy")
} else if (input === 0) {
    console.log("The number 0 is falsy (the only falsy number)")
} else {
    console.log("The empty string is falsy (the only falsy string)")
}

// Number line
const num1= -1000
const num2= 0
const sum = num1 + num2

if (sum < 0 && sum >= -1000) {
    console.log(sum + " is a negative number") 
} else if (sum < 0 && sum < -1000) {
    console.log(sum + " is less than -1000")
} else if (sum > 0 && sum < 100) {
    console.log(sum + " is greater than 0")
} else if (sum == 0) {
    console.log(sum + " is equal to 0")
} else {
    console.log(sum + " is greater than 100")
}

// Greater than 5
const num1 = 5
const num2 = 5

if (num1 && num2 >= 5) {
    console.log("true")
}
else {
    console.log("false")
}

//Pair and Compare
const param1a = "cat"
const param1b = "cat"
const param2a = 6
const param2b = "6"
if (param1a == param1b || param2a == param2b) {
    console.log ("true")
} else {
    console.log ("false")
}