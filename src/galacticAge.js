//Business logic for galactic age calculator.

//creates class to store name and age of user

export class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.mercAge = 0;
  }

  convertMercury() {
    console.log('I am in the function');
    return (this.age * .24);
  }
}
