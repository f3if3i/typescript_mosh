class Account1 {
  // readonly id: number;
  // owner: string;
  // private _balance: number;
  // nickname?: string;
  // transaction?: number[]

  // constructor(id: number, owner: string, balance: number) {
  //   this.id = id;
  //   this.owner = owner;
  //   this._balance = balance;
  // }

  // readonly id: number;
  // owner: string;
  // private _balance: number;
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

  getBalance(): number {
    return this._balance;
  }

  private calculateTax() {}
}

let account1 = new Account1(1, "Mosh", 0);
account.deposit(100);
// console.log(account._balance)
// Object
console.log(typeof account);
// boolean
console.log(account instanceof Account);

// Union
// if (typeof someObj === 'number') {}

// access control/modifier
