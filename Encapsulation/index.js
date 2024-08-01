var Animal = /** @class */ (function () {
    function Animal(name, species) {
        this.name = name;
        this.species = species;
    }
    Animal.prototype.display = function () {
        return "".concat(this.name, ", ").concat(this.species);
    };
    Animal.prototype.sounds = function () {
        return "".concat(this.display(), " sounds");
    };
    return Animal;
}());
var animal = new Animal("Cat", "Sphynx cat");
console.log(animal.sounds());
