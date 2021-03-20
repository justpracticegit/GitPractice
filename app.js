//const firstName = 'Vladilen'

//let age = 26
//const isProgrammer=true;


//console.log('Name of person '  + firstName + ', age ' + age)

/*const lastName = prompt('Enter lastName')
alert(firstName + ' ' + lastName)*/

/* let currentYer = 2021
const birthYear = 1997

let age = currentYer - birthYear;
console.log(age)
console.log(currentYer++) */

//const isReady = false

/*if(isReady){
    console.log("All ready")
}
else{
    console.log("error")
}*/

//isReady ? console.log('All ready'): console.log("Not ready")

/*function calculateAge(year){
    return 2020 - year;
}
*/
//console.log(calculateAge(1997))

/*function loginInfoAbout(name, year){
    const age = calculateAge(year)
    console.log("Name " + name + " Year " + year)
}

loginInfoAbout('Gaziz', 1997)*/

//const cars = ['Mazda','Mers', 'Ford']
//console.log(cars.length)

/* for(let i = 0; i<cars.length; i++){
    const car = cars[i]
    console.log(car)
} */

/*for(let car of cars){
    console.log(car)
}*/

/* const person = {
    firstName:'Gaziz',
    lastName:'Ukan',
    year:1997,
    languages:['Ru','En','De'],
    hasWife:false,

}

const key = 'year';
console.log(person)
console.log(person[key]) 


/* const num = 42
const float = 42.42
console.log(num)
console.log(Number.MAX_SAFE_INTEGER) */
/* 
const num = '42'

console.log(parseInt(num) + 2) */

/* function getRandomNumberBetween(max, min){
    return Math.floor(Math.random() * (max-min)*min)
}

console.log(getRandomNumberBetween(25,10)) */

/* const name = 'Gaziz'
const age = 25 */

//const output = 'Hello,my name is' + name + 'and my age' + age 
//console.log(output)
/* function logPerson(s,name,age){
    return 'Info about person'
} */

/* function greet(name){
    console.log('Hello' +name)
}

const greet2 = function(name){
    console.log('Hello ' +name)
}
greet('Gaziz')
greet2('Aizere')

console.log(typeof(greet))

 */

/* function saySomething(a){
    console.log('Hi' + a)
}

const arrow = (name)=>{
    console.log('Hi' +name)
}

arrow('Tate')
saySomething('AAAA') */

//Arrays

const cars = ['Audi','BMW','AstonMartin']
/* cars.push('Mers')
cars.unshift('Toyota')
const firstCar = cars.shift()
const lastCar = cars.pop()
console.log(firstCar)
console.log(lastCar)
console.log(cars) */

const people =[
    {name:'Gaziz',budget:200},
    {name:'Aiman',budget:2000},
    {name:'Sholpan',budget:300}
]
const fib = [1,1,2,3,5,8]
//const carindex= cars.indexOf('BMW')


/* const text = 'Hi, my name is Gaziz'
const reverseText = text.split('').reverse().join('')
console.log(reverseText) */

/* let findedPerson
for(const person of people){
    //console.log(person)
    if(person.budget == 300){
        findedPerson = person
    }
}
console.log(findedPerson) */

/* const person = people.find(function (person) {
    return person.budget === 300
}) */
//console.log(person)

/* const upperCaseCars = cars.map(car =>{
    return car.toUpperCase()
}) */

/* const pow2 = num=>num**2 
const sqrt = num=>Math.sqrt(num)
const pow2Fib = fib.map(pow2).map(sqrt)
const sortedFib = pow2Fib.filter(num=> num > 20) */
//console.log(upperCaseCars)
//console.log(pow2Fib)
//console.log(sortedFib)


const person = {
    nname = 'Gaziz',
    age = 23,
    languages:['ru','kz','en'],
    isProger = yes
}
console.log(person.age)