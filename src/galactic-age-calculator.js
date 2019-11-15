export class Person {

  constructor(age, activityLevel, lifeExp) {
    this.age = age, 
    this.activityLevel = activityLevel,
    this.lifeExp = 0
  }

  calcMercYears(age) {
    const mercYears = (this.age * 365) / (365 * 0.24);
    return mercYears.toFixed(2);   
  }

  calcVenYears(age) {
    const venYears = (this.age * 365) / (365 * 0.62);
    return venYears.toFixed(2);   
  }

  calcMarsYears(age) {
    const marsYears = (this.age * 365) / (365 * 1.88);
    return marsYears.toFixed(2);   
  }

  calcJupYears(age) {
    const jupYears = (this.age * 365) / (365 * 11.86);
    return jupYears.toFixed(2);   
  }

  setActivityLevel(level){ 
    if ( level === "Not Active"){
      this.activityLevel = "Not Active"
    }
    if ( level === "Very Active"){
      this.activityLevel = "Very Active" 
    }
  }

  calcLifeExp(activitylevel) {
    if (activitylevel === "Not Active"){
      return this.lifeExp += 50;
    } 
    if (activitylevel === "Very Active") {
      return this.lifeExp += 80;
    }
  }

}