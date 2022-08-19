abstract class Calendar1 {
  constructor(public name: string) {}

  abstract addEvent(): void;
  abstract removeEvent(): void;
}

// use interface to define a shape of a object

// interface or abstract class or type?
// if the shape contains no logic, use interface since it's more concise
interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

// use command + period
class GoogleCalendar implements Calendar {
  // name: string;
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
