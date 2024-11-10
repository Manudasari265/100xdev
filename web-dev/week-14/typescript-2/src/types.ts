//* types lets you do UNIONS & INTERSECTIONS

type User3 = {
    name: string;
    age: number;
}

function isLegal(user: User) {
    return user.age > 18;
}

//* INTERACTIONS
type Employee = {
    name: string;
    startDate: string;
};

type Manager = {
    name: string;
    department: string;
}

type TeamLead = Employee | Manager;

let e: Employee = {
    name: "Manoj",
    startDate: "01-04-2025"
}

let m: Manager = {
    name: "Manoj",
    department: "CSE"
}