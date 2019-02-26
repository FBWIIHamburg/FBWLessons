class Person {
    constructor(fName, lName, age) {
        this.firstName = fName;
        this.lastName = lName;
        this.Age = age;
        this.fullName = function () {
            return this.firstName + " " + this.lastName;
        };
    }
    birthYear() {
        let currentDate = new Date();
        return currentDate.getFullYear() - this.Age;
    }
}

let theTrainer = new Person("Ahmad","Osman",33);
let participant1 = new Person("Petros","Paulos",27);

console.log(theTrainer.firstName);
console.log(theTrainer.fullName());
console.log(theTrainer.birthYear());