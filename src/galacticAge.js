//Business logic for galactic age calculator.
// import $ from 'jquery';
//creates class to store name and age of user

export class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.mercAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.avgLifespan = 72.04;
    this.yearsLeft = 0;
    this.mercLeft = 0;
    this.venusLeft = 0;
    this.marsLeft = 0;
    this.jupiterLeft = 0;
  }

  convertAge() {
    this.mercAge = Number((this.age * .24).toFixed(2));
    this.venusAge = Number((this.age * .62).toFixed(2));
    this.marsAge = Number((this.age * 1.88).toFixed(2));
    this.jupiterAge = Number((this.age * 11.86).toFixed(2));
  }
  lifeLeft() {
    let earthAvg = 72.04;
    let mercAvg = 135.44;
    let venusAvg = 44.66;
    let marsAvg = 135.44;
    let jupiterAvg = 854.39;

    this.yearsLeft = Number((earthAvg - this.age).toFixed(2));
    this.mercLeft = Number((mercAvg - this.mercAge).toFixed(2));
    this.venusLeft = Number((venusAvg - this.venusAge).toFixed(2));
    this.marsLeft = Number((marsAvg - this.marsAge).toFixed(2));
    this.jupiterLeft = Number((jupiterAvg - this.jupiterAge).toFixed(2));
    }
  }
