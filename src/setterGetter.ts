class Account {
  nickname?: string;
  transaction?: number[];

  // parameter properties
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Ivalid amount");
    }
    this._balance += amount;
  }

  // getter
  get balance(): number {
    return this._balance;
  }

  // setter
  set balance(value: number) {
    if (value < 0) {
      throw new Error("Invalid value");
    }
    this._balance = value;
  }

  private calculateTax() {}
}

let account = new Account(1, "Mosh", 0);
account.deposit(100);
// console.log(account._balance)
// Object
console.log(typeof account);
// boolean
console.log(account instanceof Account);
