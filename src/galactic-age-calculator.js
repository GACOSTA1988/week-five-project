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

calcMarsYears(age) {
    let marsYears = (this.age * 365) / (365 * 1.88);
    return marsYears.toFixed(2);   
}

calcJupYears(age) {
    let jupYears = (this.age * 365) / (365 * 11.86);
    return jupYears.toFixed(2);   
}

}