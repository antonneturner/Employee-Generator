// // TODO: Write code to define and export the Employee class

// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }




















// var dog = {
//     name: "wolfy",
//     haircolor: "brown"
// }

// var cat = {
//     name: "meow",
//     haircolor: "black"
// }

// class Food {
//     constructor(type, brand) {
//         this.type = type
//         this.brand = brand
//     }
//     getType() {
//         return this.type
//     }
//     getBrand() {
//         return this.brand
//     }
// }

// class Animal extends Food {
//     constructor(name, haircolor, type, brand) {
//         super(type, brand) //food constructor
//         this.name = name
//         this.haircolor = haircolor
//     }
//     getName() {
//         return this.name
//     }
//     getHaircolor() {
//         return this.haircolor
//     }
// }

// var dog = new Animal("wolfy", "brown", "dog", "purina")
// console.log(dog.getName(), dog.getBrand())

// var cat = new Animal("meow", "black", "cat", "Iams")

// console.log()