export class Person {

constructor(age) {
    this.age = age 
  }

calcMercYears(age) {
    let mercYears = (this.age * 365) / (365 * 0.24);
    return mercYears.toFixed(2);   
}

calcVenYears(age) {
    let venYears = (this.age * 365) / (365 * 0.62);
    return venYears.toFixed(2);   
}

}