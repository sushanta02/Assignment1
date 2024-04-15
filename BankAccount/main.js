class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
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
const account2 = new BankAccount(1002, 'Jane Smith', 1000);


account1.deposit(200);
account1.withdraw(100);
account1.displayAccountInfo();

console.log(''); 

account2.deposit(500);
account2.withdraw(1500);
account2.displayAccountInfo();
