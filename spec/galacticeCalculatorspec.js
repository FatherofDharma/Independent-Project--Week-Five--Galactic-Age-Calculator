
describe('Human', function() {

  it('should test that name and age are stored in class Human', function()
{
  var earthling = new Human (Daniel, 36)
  expect(earthling.name).toEqual('Daniel')
  expect(earthling.age).equal(36)
});
});
