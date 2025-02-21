use chrono::{Utc, Local};
use dotenv::dotenv;
use std::env;
use std::ops::Add;
use std::ops::Mul;

trait Shape {
    fn area(&self) -> u32;
}

struct Rect<T> {
    width: T,
    height: T
}

impl<T: Mul<Output = T> + Copy> Shape for Rect<T> {
    fn area(&self) -> T {
        return self.1111width * self.height;
    }
}

fn main() {
    dotenv().ok();
    let utc = Utc::now();
    let local_time = Local::now();
    println!("UTC: {}", utc);
    println!("local time: {}", local_time);

    let redis_url_result = env::var("REDIS_ADDRESS");

    match redis_url_result {
        Ok(str) => println!("{}", str),
        Err(_e) => println!("Error while reading variable"),
    }

    let sum_res = sum(1, 2);
    println!("Sum is: {}", sum_res);

    // let str = String::from("gm world!")
    // let variable_print = print_variable(str);
    // println!("Variable print: {}", variable_print);

    let r = Rect {
        width: 10,
        height: 20,
    };

    let r1 = Rect {
        width: 30,
        height: 30,
    };

    let rect = Rect { width: 10, height: 5 };
    println!("Area: {}", rect.area())
}

fn sum<T: Add<Output = T>>(a: T, b: T) -> T {
    return a + b;
}

fn print_variable<T: std::fmt::Display>(a: T) {
    println!("{}", a);
}