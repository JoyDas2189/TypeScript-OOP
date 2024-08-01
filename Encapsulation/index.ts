class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  display() {
    return `${this.name}, ${this.species}`;
  }

  sounds() {
    return `${this.display()} sounds`;
  }
}

const animal: Animal = new Animal("Cat", "Sphynx cat");
console.log(animal.sounds());
