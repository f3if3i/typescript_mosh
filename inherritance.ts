class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  // protected can be herrited
  // private can't
  protected walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  taketest() {
    console.log("taking a test");
  }
}

// let student = new Student(1, "John", "john@gmail.com");

class Teacher extends Person {
  // override
  override get fullName() {
    // return "Prof. " + this.firstName + " " + this.lastName;
    return "Professor" + super.fullName;
  }
}

class Principle extends Person {
  override get fullName(): string {
    return "Pricinple " + super.fullName;
  }
}

// polymorphic
let teacher = new Teacher("John", "Smith");

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([
  new Student(1, "mosh", "wow"),
  new Teacher("mosh", "bobo"),
  new Principle("mosh", "bobo"),
]);

// open closed principle
// classes shold be open for extension and closed for modification
