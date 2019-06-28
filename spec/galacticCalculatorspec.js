import { Human } from './../src/galacticAge.js'
describe('Human', function() {

  it('should test that name and age are stored in class Human', function() {
    let earthling = new Human('Daniel', 36)
    expect(earthling.name).toEqual('Daniel');
    expect(earthling.age).toEqual(36);
  });
//this test is no longer valid as written as the method now stores new values rather than returning them. This is why it is now commented out.

  // it('should test if the function convertAge can return the Humans age in mercury years', function() {
  //   let earthling = new Human('Daniel', 36)
  //   expect(earthling.convertAge()).toEqual(8.64);
  // })

//testthat redefined new behaviors for the convertAge function by storing the value instead of returning it.
  it('should test if the function convertAge can store the new value in the Human object', function() {
    const earthling = new Human ('Daniel', 36)
    earthling.convertAge();
    expect(earthling.mercAge).toEqual(8.64);
  })

  it('should test if the function convertAge can convert to venus age and store it in the Human object', function() {
    const earthling = new Human ('Daniel', 36)
    earthling.convertAge();
    expect(earthling.venusAge).toEqual(22.32);
  })

  it('should test if the function convertAge can convert to mars age and store it in the Human object', function() {
    const earthling = new Human ('Daniel', 30)
    earthling.convertAge();
    expect(earthling.marsAge).toEqual(56.4);
  })
  it('should test if the function convertAge can convert to jupiter age and store it in the Human object', function() {
    const earthling = new Human ('Daniel', 30)
    earthling.convertAge();
    expect(earthling.jupiterAge).toEqual(355.80);
  })
  //numbers are based on current life expectancy of humans on earth from google as of 2016
  //the idea is to use same function to calculate an average earthling's expectancy on each planet for easy comparison to current earthling.

  it('should test if convertAge correctly stores average life expectancies in new variable', function() {
    const avgearthling = new Human ('John Doe', 72.04)
    avgearthling.convertAge();
    expect(avgearthling.mercAge).toEqual(17.29);
    expect(avgearthling.venusAge).toEqual(44.66);
    expect(avgearthling.marsAge).toEqual(135.44);
    expect(avgearthling.jupiterAge).toEqual(854.39);
  })
  //this test should check to compare the user's age to the average life expectamcy and return the difference as years left to live on that planet.
  it('should test to compare the average life expectancy of an average earthling to the user and determine their time left on earth', function() {
    const avgearthling = new Human ('John Doe', 72.04)
    const earthling = new Human ('Daniel', 36)
    avgearthling.convertAge();
    earthling.convertAge();
    let noob = earthling.checkDeath(avgearthling)
    console.log(noob);
    // expect (earthling.checkDeath(avgearthling)).toEqual(36.04)
  })
});
