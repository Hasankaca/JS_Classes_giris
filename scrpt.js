class Car {
  constructor (name, make, year, fuel, isManual) {
    this.name = name;
    this.make = make;
    this.year = year;
    this.fuel = fuel;
    this.isManual = isManual;
  }

  run () {
    return '3, 2, 1, Ready!';
  }

  getInfo() {
    return `My car is a ${this.fuel} ${this.make} ${this.name} built in ${this.year}.`  ;
  }

}

class Tesla extends Car{
  constructor (name, year, apV) {
    super(name, 'Tesla', year, 'Electric', 'Auto');
    this.autoPilotVersion = apV;
  }
}

// const camry = new Car('Camry', 'Toyota', 'Hybrid', true);
// console.log(camry.getInfo());

const teslaThree = new Tesla('3', 2019, 2.0);
console.log(teslaThree.year)

// Factory Functions
// function makeCar (a, b, c, d) {
//   return {
//     name: a,
//     make: b,
//     year: 2020,
//     fuel: c,
//     isManualTransmission: d,
//   }
// }

// const camry = makeCar('Camry', 'Toyota', 'Hybrid', true);
// console.log(camry.make);

// const camry = {
//   name: 'Camry',
//   make: 'Toyota',
//   year: 2020,
//   fuel: 'Hybrid',
//   isManualTransmission: true,
// }

// console.log(camry.make);




















// let car = {
//   name: 'Camry',
//   make: 'Toyota',
//   year: 2020,
//   fuel: 'hybrid',
//   isManuelTransmission: true,

  // run () {
  //   return '3, 2, 1, Ready!';
  // }, 

  // getInfo() {
  //   return `My car is a ${this.fuel} ${this.make} ${this.name} built in ${this.year}.`  ;
  // }
// }


// console.log(car.name);