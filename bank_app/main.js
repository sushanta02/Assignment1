class BankAccount {
  static accounts = [];

  constructor(accountNumber, ownerName, balance) {
    if (BankAccount.accountExists(accountNumber)) {
      throw new Error('Account number already exists');
    }

    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
    console.log(`New Account ${this.accountNumber} created with initial balance $${balance}`);

    BankAccount.accounts.push(this);
  }

  static accountExists(accountNumber) {
    return BankAccount.accounts.some(account => account.accountNumber === accountNumber);
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount} into account ${this.accountNumber}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient funds');
    } else {
      this.balance -= amount;
      console.log(`Withdrawn $${amount} from account ${this.accountNumber}`);
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: $${this.balance}`);
  }
}



const account1 = new BankAccount(1001, 'John Doe', 500);
console.log(''); 
const account2 = new BankAccount(1002, 'Jane Smith', 1000);

console.log(''); 

account1.deposit(200);
account1.withdraw(100);
account1.displayAccountInfo();

console.log(''); 

account2.deposit(500);
account2.withdraw(1500);
account2.displayAccountInfo();
