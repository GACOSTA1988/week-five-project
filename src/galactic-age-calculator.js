export class Person {

constructor(age) {
    this.age = age 
  }

calcMercYears(age) {
    return (this.age * 365) / (365 * 0.24);
}


}