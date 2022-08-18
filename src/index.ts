// type alias
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

// union type

function kgToLbs(weight: number | string): number {
  // narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}
kgToLbs(10);
kgToLbs("10kg");

// intersection type
let weight: number & string;

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// literal types(exact, specific)

// let quantity: number;
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

//nullable Type
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hola!");
  }
}

greet(null);

// optional chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if (customer !== null && customer !== undefined) {
// 	console.log(customer.birthday)
// }

// optional property access operator
console.log(customer?.birthday?.getFullYear());

// optional element access oeprator
// customers?.[0]

// optional call
let log: any = null;
log?.("a");

let speed: number | null = null;
let ride = {
  // if speed is truthy, use speed's value, else(undefined, null, '', false, 0) use 30
  // speed: speed || 30
  // speed: speed !== null ? speed : 30,
  // nullish coaelscing operator
  // if speed is not undefined or null, use the value 30
  speed: speed ?? 30,
};

//type assersion
let phone = document.getElementById("phone") as HTMLInputElement;
let phone1 = <HTMLInputElement>document.getElementById("phone");
// HTMLElement => HTMLInputElement
phone.value;

// any type
// unknown is better than any cuz compiler will force to do type checking
function render(document: unknown) {
  // Narrowing
  // only works on the exsiting types
  // typeof 其实就是判断参数是什么类型的实例，就一个参数，用例：typeof A
  // "number"、"string"、"boolean"、"object"、"function" 和 "undefined"
  if (typeof document === "string") {
    document.toUpperCase();
  }
  // instanceof 是用来判断 A 是否为 B 的实例，表达式为：A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false。
  if (document instanceof WordDocument) {
    document.toUpperCase();
  }
  document.move();
  document.fly();
  document.whateverWeWant();
}

/*
function Parent(){};
function Child(){};
function Other(){};

Child.prototype = new Parent();
let child = new Child();

child instanceof Child; // true
child instanceof Parent; // true
child instanceof Object; // true
child instanceof Other; // false
*/

// the never type
function reject(message: string): never {
  throw new Error(message);
}
// tell compiler that the function never returns
function processEvents(): never {
  while (true) {}
}
// processEvents();
reject("...");
console.log("Helloworld");
