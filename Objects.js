//OBJECTS
//Contains the details
let person = {
    name: 'Wanji',
    age: 19,
    gender: 'non-binary',
    hobby: function(activity){
        return `My name is ${this.name} I love ${activity}`
    }  
}


//Changing you create another function by borrowing from the function                                                                                                                                                                                                                                     
let student = Object.create(person);
student['name']= 'Kimberly'
student.age = 20
person.country = "South Africa"
person['nationality'] = 'South African'
console.log (person.hobby('coding'))
console.log(student.age);


