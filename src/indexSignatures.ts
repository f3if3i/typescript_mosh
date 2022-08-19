class SeatAssignment {
  // index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats["A1"] = "mosh";
seats.A2 = "Josh";

// static properties

class Ride {
  private static _activeRides: number = 0;
  start() {
    Ride._activeRides++;
  }

  stop() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();
console.log(Ride.activeRides);

let ride2 = new Ride();
ride2.start();
