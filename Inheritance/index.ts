class Car {
    name:string;
    brand:string;

    constructor(name:string, brand:string) {
        this.name = name;
        this.brand = brand;
    }

    carInfo() {
        return `Name : ${this.name},  Brand : ${this.brand}`;
    }
}

class Sedan extends Car {
    color: string;
    height: string;
    weight: string;

    constructor(name:string, brand:string, color:string, height:string, weight:string) {
        super(name, brand);
        this.color = color;
        this.height = height;
        this.weight = weight;
    }

    sedanInfo() {
        return `${this.carInfo()}, Color : ${this.color}, Height : ${this.height}, Weight : ${this.weight}`;
    }
}

const myCar = new Sedan ("Crown", "Toyota", "Red", "6ft", "600kg");

console.log(myCar.sedanInfo());

