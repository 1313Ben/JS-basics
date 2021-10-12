// ES6 Arrow functions
console.log("!!Arrow functions!!!")
const integers = [1,2,3]
  // way 1
const updateIntegersWayOne = integers.map(function (number) {
  return number += 1;
});
console.log(updateIntegersWayOne); // [2, 3, 4]

  // way 2
const updateIntegersWayTwo = integers.map((number) => {
  return number += 1;
})
console.log(updateIntegersWayTwo); // [2, 3, 4]

  // way 3
const updateIntegersWayThree = integers.map((number) => number += 1);
console.log(updateIntegersWayThree); // [2, 3, 4]

  // replacing the array
const updateIntegersWayFour = integers.map(() => 'John');
console.log(updateIntegersWayFour); // ['John', 'John', 'John']

console.log("---------------  ")
console.log("---------------  ")

// Prototype Methods
console.log("!!Prototype Methods!!!")
const person = {
  name: "John",
  age: 50
}
console.log(person)

  // Alternate
function PersonTwo(name, age) {
  this.name = name;
  this.age = age;
}
  // Add welcome method
PersonTwo.prototype.welcome = function () {
  console.log(`Hi my name is ${this.name}`)
}
const mike = new PersonTwo("Mike", 50);
console.log(mike); // PersonTwo {name: 'Mike', age: 50}
mike.welcome(); // Hi my name is Mike

console.log("---------------  ")
console.log("---------------  ")

// Class
console.log("!!Exercise Class!!!")
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  welcome() {
    console.log(`Hi my name is ${this.name}`)
  }
}
const john = new Person('John', 50);
console.log(john); // Person {name: 'John', age: 50}
john.welcome(); // Hi my name is John

console.log("---------------  ")
console.log("---------------  ")

// Spread Operator
console.log("!!Exercise Spread Operator!!!")
const names = ['John', 'Sam', 'Bill']
const moreNames = ['Mike', 'Paul', 'Ronny']

let allNames = [...names, ...moreNames, 'Johnny']
console.log(allNames)