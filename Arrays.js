// HOISTER 
// Calling the function before writing the function
people()
function people(){
    console.log("Wanji")
}


//CLOSURE
function school(){var a = 20
    function student(){
        console.log(a + 50)
    }
    student()
}
school()

//ARRAYS
//Array literal:  uses square brackets
let nums = [2,4,7]
console.log({nums})

//Array constractor - 
let nums2 = new Array (2,4,7)
console.log({nums2})


//unshift - adds at the beginning
//shift- removes the first element
//push - adds at the end
//pop - removes the last
//map - takes in an arguement and operates on every element in an array 
let a = [2,4,7]
var add = a.unshift(34)
var add2 = a.push(24)
console.log({a}[4])
let b = a.map(item => item*2)
console.log(b)


let oddNumbers = a.filter(item => item % 2 !== 0)
console.log({oddNumbers})

let fruits = ['Apple','Pineapple','Peach','Strawberry','banana']
let newFruits = fruits.map(item => {
    if (item !== item.toLocaleLowerCase()){
        return item.toLocaleUpperCase()
    }
    console.log({fruits})
    }
)
console.log({newFruits, fruits})
