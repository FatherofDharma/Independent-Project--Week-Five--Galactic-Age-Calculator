import { Human } from './../src/galacticAge.js'
describe('Human', function() {

  it('should test that name and age are stored in class Human', function() {
    let earthling = new Human('Daniel', 36)
    console.log(earthling);
    expect(earthling.name).toEqual('Daniel');
    expect(earthling.age).toEqual(36);
  });
});
