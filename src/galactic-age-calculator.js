export class Person {
  constructor(age = 0, activityLevel = "", lifeExp = 0) {
    this.age = age, 
    this.activityLevel = activityLevel,
    this.lifeExp = lifeExp;
  }

  calcMercYears(years) {
    const mercYears = (years * 365) / (365 * 0.24);
    return mercYears.toFixed(2);   
  }

  calcVenYears() {
    const venYears = (this.age * 365) / (365 * 0.62);
    return venYears.toFixed(2);   
  }

  calcMarsYears() {
    const marsYears = (this.age * 365) / (365 * 1.88);
    return marsYears.toFixed(2);   
  }

  calcJupYears() {
    const jupYears = (this.age * 365) / (365 * 11.86);
    return jupYears.toFixed(2);   
  }

  setActivityLevel(level) { 
    if (level === "Not Active") {
      this.activityLevel = "Not Active";
    }
    if (level === "Very Active") {
      this.activityLevel = "Very Active"; 
    }
  }

  setLifeExp(activitylevel) {
    if (activitylevel === "Not Active") {
      this.lifeExp += 50;
    } 
    if (activitylevel === "Very Active") {
      this.lifeExp += 80;
    }
  }

  // calcLifeLeftOnPlanet(planetName = "Earth") {
  //   if (planetName === "Mercury") {
  //     return this.calcLifeLeftOnMercury();
  //   }
  //   // if (planetName === "Venus") {
  //   //   return this.calcLifeLeftOnVenus();
  //   // }
  //   // if (planetName === "Earth") {
  //   //   return this.calcLifeLeftOnEarth();
  //   // }
  //   // if (planetName === "Jupiter") {
  //   //   return this.calcLifeLeftOnJupiter();
  //   // }
  // }
  
  calcLifeLeft() { //earth
    const lifeLeft = parseFloat(this.lifeExp) - parseFloat(this.age); 
    return parseFloat(lifeLeft.toFixed(2));
  }

  calcLifeLeftOnMercury() {
    const mercAge = this.calcMercYears(this.age);
    const mercLifeExp = this.calcMercYears(this.lifeExp);

    return mercLifeExp - mercAge;
  }
  calcLifeLeftOnVenus() {
    const venusAge = this.calcVenYears(this.age);
    const venusLifeExp = this.calcVenYears(this.lifeExp);

    return venusLifeExp - venusAge;
  }
  calcLifeLeftOnMars() {
    const marsAge = this.calcMarsYears(this.age);
    const marsLifeExp = this.calcMarsYears(this.lifeExp);

    return marsLifeExp - marsAge;
  }
  calcLifeLeftOnJupiter() {
    const jupiterAge = this.calcJupYears(this.age);
    const jupiterLifeExp = this.calcJupYears(this.lifeExp);

    return jupiterLifeExp - jupiterAge;
  }
}
