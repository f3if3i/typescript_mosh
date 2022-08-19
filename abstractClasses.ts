// tell compiler that Shape can't be use to create instance
// it needs to be extends
abstract class Shape {
  constructor(public color: string) {}

  // abstract method can only exist in abstract class
  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("rendering a circle");
  }
}

let shape = new Circle(15, "Red");
