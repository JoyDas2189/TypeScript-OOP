//Class can have multiple form...
//Class name same but different implementation...

class Cat {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound() {
    return `meow meow`;
  }

  makeSound() {
    return `${this.name} sounds ${this.sound()}`;
  }
}

class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound() {
    return `gheu gheu`;
  }

  makeSound() {
    return `${this.name} sounds ${this.sound()}`;
  }
}

const cat: Cat = new Cat("Bilai");
const dog: Dog = new Dog("Kutta");

console.log(cat.makeSound());
console.log(dog.makeSound());
