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
    this.avglifespan = 72.04;
  }

  convertAge() {
    this.mercAge = Number((this.age * .24).toFixed(2));
    this.venusAge = Number((this.age * .62).toFixed(2));
    this.marsAge = Number((this.age * 1.88).toFixed(2));
    this.jupiterAge = Number((this.age * 11.86).toFixed(2));
  }
  checkDeath(average) {
    let yearsleft = Number((average.age - this.age).toFixed(2));
    if (this.age === average.age) {
      return ('Sorry, but you have no expected years to live. Use your time wisely.');
    } else if (this.age < average.age) {
      return ('You will live ' + yearsleft + ' more years ' + this.name);
    }
  }

}
