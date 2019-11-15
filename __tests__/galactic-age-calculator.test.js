import { Person } from "./../src/galactic-age-calculator.js";

test('should correctly convert 5 earth years to (20.83) mercury years', () => {
  let testMercPerson = new Person(5);
  expect(testMercPerson.calcMercYears()).toEqual("20.83");
});

test('should correctly convert 5 earth years to (8.06) venus years', () => {
  let testVenPerson = new Person(5);
  expect(testVenPerson.calcVenYears()).toEqual("8.06");
}); 

test('should correctly convert 5 earth years to (2.66) Mars years', () => {
  let testMarsPerson = new Person(5);
  expect(testMarsPerson.calcMarsYears()).toEqual("2.66");
});
test('should correctly convert 5 earth years to (0.42) Jupiter years', () => {
  let testJupPerson = new Person(5);
  expect(testJupPerson.calcJupYears()).toEqual("0.42");
});
test.only('should correctly set the activity level for person const', () => {
  let testSetActLev = new Person();
  testSetActLev.setActivityLevel("Not Active")
  expect(testSetActLev.activityLevel).toEqual("Very Active");
});