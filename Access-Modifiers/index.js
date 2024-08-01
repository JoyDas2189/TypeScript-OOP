// class Person {
//   public name: string;
//   protected age: number;
//   private gender: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Employee = /** @class */ (function () {
    function Employee(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Department: ").concat(this.department, ", Salary : ").concat(this.salary);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, department, salary) {
        return _super.call(this, name, department, salary) || this;
    }
    Manager.prototype.getManagerDetails = function () {
        return "Manager: ".concat(this.name, ", Department: ").concat(this.department);
    };
    return Manager;
}(Employee));
var emp = new Employee("Alice", "HR", 5000);
console.log(emp.getDetails());
var manager = new Manager("Bob", "IT", 10000);
console.log(manager.getManagerDetails());
