fn main() {
    let ans: u8 = sum(1, 3);
    println!("{}", ans);

    let even: bool = is_even(10);
    println!("{}", even);

    let name: String = String::from("Manoj");
    println!("First name - {}", name);

    vector();
    mut_and_immutable();
}

fn sum(a: u8, b: u8) -> u8 {
    return a + b;
}

fn is_even(a: u32) -> bool {
    return a % 2 == 0;
}

fn vector() {
    let v: Vec<i32> = vec![1, 2, 3];
    println!("{:?}", v);
}

fn mut_and_immutable() {
    let mut name1: String = String::from("Manoj");
    name1.push_str(" Dasari");

    println!("last name - {}", name1);
}

fn create_str() {
    let mut name1: String = String::from("Manoj");
    name1.push_str(" Dasari");
    let name2: String = name1;

    println!("Borrowing example - {}", name2);
}

