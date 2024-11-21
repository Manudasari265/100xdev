interface Address {
    city: string;
    country: string;
    pincode: number;
    houseNumber: string;
};


interface User {
    name: string;
    age: number;
    address: Address;
}

let user: User = {
    name: "manoj",
    age: 23,
    address: 
}

let user2 = {
    name: "raman",
    age: 45
}

function isLegal(user: User): boolean {
    return user.age >= 18;
}

isLegal(user);