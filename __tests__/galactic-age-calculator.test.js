import { Person } from "./../src/galactic-age-calculator.js";

test('should correctly convert 5 earth years to (20.83) mercury years', () => {
    let testMercPerson = new Person(5);
    expect(testMercPerson.calcMercYears()).toEqual("20.83");
  });

  test.only('should correctly convert 5 earth years to () venus years', () => {
    let testVenPerson = new Person(5);
    expect(testVenPerson.calcVenYears()).toEqual("6");
  }); 