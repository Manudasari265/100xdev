fn main() {
    let ans = find_first_a(String::from("Manoj"));

    match ans: {
        None => println!("No value found"),
        Some => println!("{}", ans)
    }
}
