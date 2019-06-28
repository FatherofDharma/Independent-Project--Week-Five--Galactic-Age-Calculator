//Business logic for galactic age calculator.

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
  
}
