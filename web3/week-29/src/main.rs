use std::fmt::{ Display };
use borsh::{BorshSerialize, BorshDeserialize};


#[derive(BorshSerialize, BorshDeserialize, Debug, Clone)]
struct User1 {
    username: String,
    password: String,
}

struct User2 {
    username: String,
    password: String,
}

trait Shape {
    fn area(&self) -> u32;
}

struct Rect {
    width: u32,
    height: u32,
}

impl Shape for Rect {
    fn area(&self) -> u32 {
        return self.width * self.height;
    }
}

struct Circle {
    radius: u32,
}

impl Shape for Circle {
    fn area(&self) ->u32 {
        return self.radius * self.radius;
    }
}

macro_rules! say_hello {
    () => {
        println!("Hello, world!");
    };
}

//? macros in rust
struct User {
    username: String,
    age: u32,
}

impl Display for User {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(f, "This is the user struct with age {}, {}", self.age, self.username)
    }
}

fn main() {
    let r = Rect {
        width: 10,
        height: 20,
    };
    let res = get_area(r);
    println!("{}", res);

    let c = Circle {
        radius: 24,
    };
    get_area(c);

    say_hello!();

    let u = User {
        username: String::from("Manoj"),
        age: 29
    };

    println!("{}", u.username);
    println!("{}", u.age);
    println!("{}", u);

    let u1 = User1 {
        username: String::from("Manoj"),
        password: String::from("123"),
    };

    let serialized_string = serde_json::to_string(&u1);
    match serialized_string {
        Ok(str) => println!("{}", str),
        Err(_) => println!("Error while converting to string")
    };

    let u2 = User2 {
        username: String::from("Dasari"),
        password: String::from("3214"),
    };

    let mut v: Vec<u8> = Vec::new();

    let ans = u.serialize(&mut v);

    let user_res = User2::try_from_slice(&v).unwrap();
    println!("{}", user_res.username);
}

fn get_area<T: Shape>(s: T) -> u32 {
    return s.area();
}