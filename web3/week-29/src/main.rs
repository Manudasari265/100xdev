use std::fmt::{ Display };

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
}

fn get_area<T: Shape>(s: T) -> u32 {
    return s.area();
}