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
    let earthling = new Human ('Daniel', 36)
    earthling.convertAge();
    expect(earthling.mercAge).toEqual(8.64);
  })

});
