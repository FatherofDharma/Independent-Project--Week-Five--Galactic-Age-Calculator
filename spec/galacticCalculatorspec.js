import { Human } from './../src/galacticAge.js'
describe('Human', function() {

  it('should test that name and age are stored in class Human', function() {
    let earthling = new Human('Daniel', 36)
    expect(earthling.name).toEqual('Daniel');
    expect(earthling.age).toEqual(36);
  });

  it('should test if the function convertMercury can return the Humans age in mercury years', function() {
    let earthling = new Human('Daniel', 36)
    expect(earthling.convertMercury()).toEqual(8.64);
  })
  it('should test if the function convertMercury can store the new value in the Human object', function() {
    let earthling = new Human ('Daniel', 36)
    expect(earthling.convertMercury()).toEqual(8.64);
    expect(earthiling.mercAge).toEqual(8.64);
  })
});
