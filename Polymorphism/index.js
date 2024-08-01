//Class can have multiple form...
//Class name same but different implementation...
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.sound = function () {
        return "meow meow";
    };
    Cat.prototype.makeSound = function () {
        return "".concat(this.name, " sounds ").concat(this.sound());
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sound = function () {
        return "gheu gheu";
    };
    Dog.prototype.makeSound = function () {
        return "".concat(this.name, " sounds ").concat(this.sound());
    };
    return Dog;
}());
var cat = new Cat("Bilai");
var dog = new Dog("Kutta");
console.log(cat.makeSound());
console.log(dog.makeSound());
