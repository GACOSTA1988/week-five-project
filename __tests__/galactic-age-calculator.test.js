import { Person } from "./../src/galactic-age-calculator.js";

// THIS WILL TEST EARTH TO MERCURY CONVERSION
test('should correctly convert 5 earth years to (20.83) mercury years', () => {
  let testMercPerson = new Person(5);
  let mercAge = testMercPerson.age;
  expect(testMercPerson.calcMercYears(mercAge)).toEqual("20.83");
});

// THIS WILL TEST EARTH TO VENUS CONVERSION
test('should correctly convert 5 earth years to (8.06) venus years', () => {
  let testVenPerson = new Person(5);
  let venAge = testVenPerson.age;
  expect(testVenPerson.calcVenYears(venAge)).toEqual("8.06");
}); 

// THIS WILL TEST EARTH TO MARS CONVERSION
test('should correctly convert 5 earth years to (2.66) Mars years', () => {
  let testMarsPerson = new Person(5);
  let marsAge = testMarsPerson.age;
  expect(testMarsPerson.calcMarsYears(marsAge)).toEqual("2.66");
});

// THIS WILL TEST EARTH TO JUPITER CONVERSION
test('should correctly convert 5 earth years to (0.42) Jupiter years', () => {
  let testJupPerson = new Person(5);
  let jupAge = testJupPerson.age;
  expect(testJupPerson.calcJupYears(jupAge)).toEqual("0.42");
});

// THIS WILL TEST FUNCTION THAT WILL SET ACTIVITY LEVEL TO PERSON OBJECT
test('should correctly set the activity level for person object', () => {
  let testSetActLev = new Person(5);
  testSetActLev.setActivityLevel("Very Active")
  expect(testSetActLev.activityLevel).toEqual("Very Active");
});

// THIS WILL TEST FUNCTION THAT WILL SET LIFE EXPECTANCY TO PERSON OBJECT
test('should correctly set lifeExp in regards to activity level', () => {
  let testSetActLev = new Person(5);
  testSetActLev.setLifeExp("Very Active");
  expect(testSetActLev.lifeExp).toEqual(80);
});

// THIS WILL TEST FUNCTION THAT SUBTRACTS CURRENT AGE - LIFEEXP OF OBJECT
test('should correctly calculate life left in regards to current age and lifeExp ', () => {
  let testSetActLev = new Person(20, "Very Active", 80);
  expect(testSetActLev.calcLifeLeft()).toEqual(60);
});

// THIS WILL TEST FUNCTION THAT SUBTRACTS CURRENT AGE - LIFEEXP OF OBJECT(MERCURY)
test('should correctly calculate life in Mercury years left in regards to current age and lifeExp on Mercury', () => {
  let testSetActLev = new Person(20, "Very Active", 80);
  expect(testSetActLev.calcLifeLeftOnMercury()).toEqual("250.00");
});

// THIS WILL TEST FUNCTION THAT SUBTRACTS CURRENT AGE - LIFEEXP OF OBJECT(VENUS)
test('should correctly calculate life in Venus years left in regards to current age and lifeExp on Mercury', () => {
  let testSetActLev = new Person(20, "Very Active", 80);
  expect(testSetActLev.calcLifeLeftOnVenus()).toEqual("96.77");
});

// THIS WILL TEST FUNCTION THAT SUBTRACTS CURRENT AGE - LIFEEXP OF OBJECT(MARS)
test('should correctly calculate life in Venus years left in regards to current age and lifeExp on Mercury', () => {
  let testSetActLev = new Person(20, "Very Active", 80);
  expect(testSetActLev.calcLifeLeftOnMars()).toEqual("31.91");
});



// THIS WILL TEST FUNCTION THAT SUBTRACTS CURRENT AGE - LIFEEXP OF OBJECT(JUPITER)
test('should correctly calculate life in Jupiter years left in regards to current age and lifeExp on Mercury', () => {
  let testSetActLev = new Person(20, "Very Active", 80);
  expect(testSetActLev.calcLifeLeftOnJupiter()).toEqual("5.06");
});
