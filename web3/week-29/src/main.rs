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
}

fn get_area<T: Shape>(s: T) -> u32 {
    return s.area();
}