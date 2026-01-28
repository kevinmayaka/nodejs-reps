// classes 
// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         return `Hello! I am ${this.name}, aged ${this.age}`
//     }
// }
// const person = new Person ('Alicia', 30);
// console.log(person.greet());

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        return `${this.name} makes a sound`
    }
}
class Dog extends Animal {
    speak(){
        return `${this.name} barks!`
    }
}

const dog = new Dog('rex');
console.log(dog.speak());