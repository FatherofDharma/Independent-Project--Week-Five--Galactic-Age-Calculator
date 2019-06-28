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
  }

  convertAge() {
    this.mercAge = this.age * .24;
    this.venusAge = this.age * .62;
    this.marsAge = this.age * 1.88;
  }
}
