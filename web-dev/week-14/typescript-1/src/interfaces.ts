function greet1(user: {
    name: string;
    age: number
}) {
    console.log(`Hello ${user.name}`);
}

let user = {
    name: "manoj",
    age: 23
}

greet1(user);

//^ above code is redundant and the below code uses INTERFACES concept

interface UserType {
    firstname1: string,
    lastname: string,
    age: number
}

function greet2(user1: UserType) {

}

let user1: UserType = {
    firstname1: "manoj2",
    lastname: "dasari",
    age: 23
}