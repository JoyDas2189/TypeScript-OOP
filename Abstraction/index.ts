abstract class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract display(): string;

  displayInformation() {
    return `${this.display()}`;
  }
}

class Employee extends Person {
  role: string;
  year: number;

  constructor(name: string, age: number, role: string, year: number) {
    super(name, age);
    this.role = role;
    this.year = year;
  }

  display() {
    return `Name : ${this.name}, Age : ${this.age}, Role : ${this.role}, Year : ${this.year}`;
  }
}

const employee1 = new Employee("Joy", 23, "Intern", 1);

console.log(employee1.displayInformation());
