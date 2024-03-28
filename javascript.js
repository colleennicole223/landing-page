
add7(10);
multiply(2,2);
capitalize("hello")
lastLetter("siufhweauofhoie")

function add7(number){
    number = number + 7
    console.log(number)
}

function multiply(number1, number2){
    multiplied = number1 * number2
    console.log(multiplied)
}

function capitalize(string){
    lowerCased = string.toLowerCase()
    upperCased = lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1)
    console.log(upperCased)
}

function lastLetter(string){
    letters = string.length
    lastchar = string.slice(letters-1)

    console.log(lastchar)
}