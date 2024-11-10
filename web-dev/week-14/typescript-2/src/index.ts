interface Admin {
    name: string,
    permissions: string;
}

interface User {
    name: string;
    age: number;
}

type UserOrAdmin = User | Admin; // Unions

function greet(user: UserOrAdmin) {
    console.log(user.name);
}

interface User2 {
    age: number | string;
}