class student{
    constructor(name,age,gender){
        this.name = name 
        this.age = age
        this.gender = gender

    }
}

let studentWanji = new student('Wanji', 19, 'Female');
console.log(studentWanji.nationality);

student.prototype.nationality = 'Kenyan'
console.log(studentWanji.nationality);

student.prototype.nationality = function(nationality){
    return `I am ${nationality}`
}
console.log(studentWanji.nationality('Ugandan'));


//Constractor Functions

function Student(name, age, gender){
    this.name = name
    this.age = age
    this.gender = gender
}

let student = new Student('Wanji', 19, 'female')
console.log(student);

Student.prototype.country = 'Kenyan'

Student.prototype.nationality = function(nationality){
    return `I'm ${nationality}`
}
console.log(student.nationality('South African'));

