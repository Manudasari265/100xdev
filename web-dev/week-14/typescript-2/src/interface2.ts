interface People {
    name: string,
    age: number, 
    isLegal1(): boolean,
}

// let people: People = {
//     name: "Manoj",
//     age: 23,
//     greet: () => {
//         return "hi"
//     }
// }

// let greeting = people.greet();

class Manager implements People {
    name: string;
    age: number;
    number: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.number = "12334";
    }

    isLegal1(): boolean {
        return this.age > 18;
    }
}

class God extends Manager {
    constructor(name: string, age: number) {
        super(name, age)
    }
}

let user1 = new Manager("John", 30,);
console.log(user1.isLegal1);

//TODO interfaces, classes, extends, implements