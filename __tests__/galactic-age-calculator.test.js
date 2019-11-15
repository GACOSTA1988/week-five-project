import { Person } from "./../src/galactic-age-calculator.js";

test('should correctly convert 5 earth years to (20.83) mercury year', () => {
    let testMercPerson = new Person(4);
    expect(testMercPerson.calcMercYears()).toEqual(20.83);
  });