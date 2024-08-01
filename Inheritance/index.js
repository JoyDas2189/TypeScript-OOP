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
var Car = /** @class */ (function () {
    function Car(name, brand) {
        this.name = name;
        this.brand = brand;
    }
    Car.prototype.carInfo = function () {
        return "Name : ".concat(this.name, ",  Brand : ").concat(this.brand);
    };
    return Car;
}());
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(name, brand, color, height, weight) {
        var _this = _super.call(this, name, brand) || this;
        _this.color = color;
        _this.height = height;
        _this.weight = weight;
        return _this;
    }
    Sedan.prototype.sedanInfo = function () {
        return "".concat(this.carInfo(), ", Color : ").concat(this.color, ", Height : ").concat(this.height, ", Weight : ").concat(this.weight);
    };
    return Sedan;
}(Car));
var myCar = new Sedan("Crown", "Toyota", "Red", "6ft", "600kg");
console.log(myCar.sedanInfo());
