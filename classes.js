// function Automobile(wheels) {
//     this.wheels = wheels;
//     this.setColor = () => {
//         this.color = color
//     }
//     this.getColor = () => {
//         return this.color;
//     }
// }

// function Motocycle(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }

// function Jetski(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }
// function Sedan(make, model, year) {
//     this.make = make
//     this.model = model
//     this.year = year
//     this.doors = 4;
// }
// Sedan.prototype = new Automobile(4)

// function Camry(){}

// Camry.prototype = new Sedan(`Toyota`, `Camry`, `1999`)
// let camry = new Camry()
// console.log(camry.doors)
// console.log(camry.wheels)
// console.log(camry.year)
// console.log(camry.model)


class Automobile{
    constructor(wheels){
        this.wheels = wheels;
        this.color = null;
    }
    setColor(color){
        this.color = color;
    }
    getColor(){
        return this.color;
    }
}

class Motocycle extends Automobile{
    constructor(make , model , year){
        super(2)
        this.make=make;
        this.model=model;
        this.year=year;
    }
}

const motorcycle = new Motocycle
console.log(motorcycle)