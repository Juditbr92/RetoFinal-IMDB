"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.showToString = function () {
        return ("Name - ".concat(this.name, "\n \n            Age - ").concat(this.age, "\n \n            Weight - ").concat(this.weight, "\n \n            Height - ").concat(this.height, "\n \n            Is retired - ").concat(this.isRetired, "\n \n            Nationality - ").concat(this.nationality, "\n \n            Oscars Number - ").concat(this.oscarsNumber, "\n \n            Profession - ").concat(this.profession, "\n\n            Photo - ").concat(this.photo));
    };
    return Professional;
}());
exports.Professional = Professional;
