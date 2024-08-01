// class Person {
//   public name: string;
//   protected age: number;
//   private gender: string;

//   constructor(name:string, age:number, gender:string) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//   getPersonInfor() {
//     return `Name : ${this.name}, Age : ${this.age}, Gender : ${this.gender}`;
//   }
// }

// class Studend extends Person {
//     readingClass:string;
    
//     constructor(name:string, age:number, gender: string, readingClass:string) {
//         super(name, age, gender);
//         this.readingClass = readingClass;
//     }
//     getStudentInfo() {
//         return `Name : ${this.name}, Age : ${this.age}, Reading : ${this.readingClass}}`;
//     }
// }

// const student1:Person = new Person ("Zoro", 45, "male")
// const student2:Studend = new Studend ("Joy", 23, "Male", "BSc");


// console.log(student1.getPersonInfor());
// console.log(student2.getStudentInfo());


class Employee {
    public name: string;
    protected department: string;
    private salary: number;

    constructor(name: string, department: string, salary: number) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `Name: ${this.name}, Department: ${this.department}, Salary : ${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name: string, department: string, salary: number) {
        super(name, department, salary);
    }

    getManagerDetails() {
        return `Manager: ${this.name}, Department: ${this.department}`;
    }
}

let emp = new Employee("Alice", "HR", 5000);
console.log(emp.getDetails());

let manager = new Manager("Bob", "IT", 10000);
console.log(manager.getManagerDetails());
