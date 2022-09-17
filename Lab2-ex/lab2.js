'use strict';

function greeter(name) {
    let greeter = 'Hello ';

   return greeter + name;
}
const names = ["Yaroslav", "Ostap", "Rauf"];

console.log("Calling greeter()");
console.log(names.map(greeter));

const capitalize = (str) => str[0].toUpperCase() + str.substring(1).toLowerCase();
console.log("Calling capitalize()");
console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

const colors = ["red", "green", "blue"];

let capitalizedColors = colors => colors.map(capitalize); 

console.log("Calling capitalizedColors()");
console.log(capitalizedColors(colors));

const values = [1,5,20,14,16];
const filterLessThan20 = values => values.filter(less20);
console.log("Calling filterLessThan20()");
console.log(filterLessThan20(values));
function less20(num) {
    return num < 20;
}

const nums = [1,2,3,4];

const sumCompute = nums => nums.reduce(sum, 0);
const sum = (a, b) => a + b;
const productCompute = nums => nums.reduce(product, 1);

const product = (a,b) => a * b;

console.log("Calling sumCompute() and productCompute()");
console.log(sumCompute(nums));
console.log(productCompute(nums));

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return this.model + " " + this.year;
    }
}
class Sedan extends Car {
   
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {
        return super.details() + " " + this.balance;
    }
}

console.log("Base class Car");
const car2 = new Car("Pontiac Firebird",1976);
console.log(car2.details());
console.log("Subclass Sedan");
const sedan = new Sedan("Volvo SD", 2018,30000);
console.log(sedan.info());