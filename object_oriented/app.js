
// const dan = {
//     name: 'Dan',
//     age: 33
// }

// console.log(dan)

//Person constructor

// function Person(name, dob){
//     this.name = name;
//     // this.age = age
//     // console.log(this)
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff)
//         return Math.abs(ageDate.getUTCFullYear() - 1970)
//     }
// }

// // console.log(this)

// // this.alert(1)
// // const dan = new Person('Dan', 33);
// // const stone = new Person('Stone',3);

// // console.log(stone)
// // console.log(dan)

// const sara = new Person('sara', '1-22-1933')
// console.log(sara.calculateAge())

// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// // console.log(name1)

// console.log(typeof name2)
// if(name1 === 'Jeff'){
//     console.log('YES')
// } else {
//     console.log('NO')
// }

// const num1 = 5;
// const num2 = new Number(5)

// console.log(num2)

// const num1 = true
// const num2 = new Boolean(true)

// const getSum = function(x, y) {
//     return x + y;
// }
// const getSum2 = new Function('x', 'y', 'return 1 + 1')

// console.log(getSum(1,1))
// console.log(getSum2())


// const john = {name: 'Dan'}
// const john2 = new Object({name: 'John'})
// console.log(john)
// console.log(john2)

// const arr1 = [1, 2, 3, 5]
// const arr2 = new Array(1,2,4,5)

// const reg1 = /\w+/;
// const reg2 = new RegExp('\\w+')
// console.log(reg1)
// console.log(reg2)

// function Person(firstname, lastname, dob){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.birthday = new Date(dob);
//     // this.calculateAge = function(){
//     //     const diff = Date.now() - this.birthday.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear() - 1970);
//     // }
// }

//calculate age
// Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// //get fullname
// Person.prototype.getFullName = function() {
//     return `${this.firstname} ${this.lastname}`
// }

// //gets married

// Person.prototype.getsMarried = function(newLastName){
//     this.lastname = newLastName
// }

// const dan = new Person('Dan', 'Mickey', '8-21-1980')
// const stone = new Person('Stone', 'McMickey', '8-21-2011')
// console.log(stone);
// console.log(dan.calculateAge());
// console.log(dan.getFullName())

// stone.getsMarried('Smith')
// console.log(stone.getFullName())

// console.log(dan.hasOwnProperty('firstName'))
// console.log(dan.hasOwnProperty('firstname'))

// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// gretting
// Person.prototype.greeting = function() {
//     return `Hello there ${this.firstName} ${this.lastName}`
// }

// //inherit Person prototype methods

// Customer.prototype = Object.create(Person.prototype)

// //make customer.prototype return customer()

// Customer.prototype.constructor = Customer
// const person1 = new Person('Dan', 'Mickey')

// // console.log(person1.greeting())

// function Customer(firstName, lastName, phone, membership){
//     Person.call(this, firstName, lastName);

//     this.phone = phone;
//     this.membership = membership;
// }

// const customer1 = new Customer('Stone', 'Smith', '949-444-4444', 'Standard')
// console.log(customer1)

// //customer greeting
// Customer.prototype.greeting = function() {
//     return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
// }


// console.log(customer1.greeting())\


// const personProtoTypes = {
//     greeting: function() {
//         return `Hello there ${this.firstName} ${this.lastName}`
//     },
//     getsMarried: function(newLastName){
//         this.lastName = newLastName
//     }
// }

// const mary = Object.create(personProtoTypes);

// mary.firstName = 'Mary'
// mary.lastName = 'Smith'
// mary.age = 30
// // console.log(mary)


// mary.getsMarried('Thommy')
// console.log(mary.greeting())

// const dan = Object.create(personProtoTypes, {
//     firstName: {value: 'Dan'},
//     lastName: {value: 'Mickey'},
//     age: {value: 33}
// })
// console.log(dan)
// console.log(dan.greeting())

// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob)
//     }

//     greeting() {
//         return `Hello there ${this.firstName} ${this.lastName}`
//     }
    
//     calculateAge(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = newDate(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970)
//     }

//     getsMarried(newLastName){
//         this.lastName = newLastName
//     }

//     static addNumbers(x, y){
//         return x + y;
//     }
// }

// const dan = new Person('Dan', 'Mickey', '01-11-1999');

// dan.getsMarried('Smith');

// console.log(dan);

// console.log(Person.addNumbers(1,3))


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    greeting() {
        return `Hey there ${this.firstName} ${this.lastName}`
    }
}

class Customer extends Person{
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost(){
        return 500
    }
}

const stone = new Customer('Stone', 'Micky', '111-222-1232', 'Standard')

console.log(stone.greeting())
console.log(Customer.getMembershipCost())