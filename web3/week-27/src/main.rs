use std::f32::consts::PI;

enum Shape {
    Square(f32),
    Circle(f32),
    Rectangle(f32),
}

fn main() {
    let shape: Shape = Shape::Square(10.0);
    let shape_rect = Shape::Rectangle(10.0, 10.0);
    let shape_circle = Shape::Circle(10.0);
}

fn calculate_area(s: Shape) -> f32 {
    match s {
        Shape::Circle(radius) => PI * radius * radius,
    }
}

