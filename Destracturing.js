let num = [2, 5,8,9]
let [a,b, ...others] = [2,5,8,9];
console.log({a});
console.log({b});
console.log({others});

setTimeout (function(){
    console.log('Hopper Lab');
    
}, 5000)

let person = {
    name: 'Hellen',
    age: 34,
    class: 'Hopper Lab'
    
}

let {name, ...people} = person
console.log(name)
console.log(people)

let childPass = true
let promise = new Promise(function(resolve, reject){
    if (childPass){
        resolve('You passed')
    }
    else{
        reject('You failed')
    }
})
.then((result) => console.log('You are a smart kid')) 
.catch(() => {
    console.log(error);
    console.log('It is okay to fail')})
.finally(() => console.log('You can be whoever you want'))
console.log(promise);

async function man(){
    let boy = await promise;
    console.log(boy);
    console.log('Promises are fun')
}
man();