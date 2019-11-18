export class Person {

  // MAIN CONSTRUCTOR
  constructor(age = 21, activityLevel = "", lifeExp = 0) {
    this.age = age, 
    this.activityLevel = activityLevel,
    this.lifeExp = lifeExp;
  }

 
  // EARTH TO MERCURY YEAR CONVERSION
  calcMercYears(years) {
    const mercYears = (years * 365) / (365 * 0.24);
    return mercYears.toFixed(2);   
  }

  // EARTH TO VENUS YEAR CONVERSION
  calcVenYears(years) {
    const venYears = (years * 365) / (365 * 0.62);
    return venYears.toFixed(2);   
  }

  // EARTH TO MARS YEAR CONVERSION
  calcMarsYears(years) {
    const marsYears = (years * 365) / (365 * 1.88);
    return marsYears.toFixed(2);   
  }

  // EARTH TO JUPITER YEAR CONVERSION
  calcJupYears(years) {
    const jupYears = (years * 365) / (365 * 11.86);
    return jupYears.toFixed(2);   
  }

  // THIS WILL SET ACTIVITY LEVEL TO OBJECT
  setActivityLevel(level) { 
    if (level === "Not Active") {
      this.activityLevel = "Not Active";
    }
    if (level === "Very Active") {
      this.activityLevel = "Very Active"; 
    }
  }

  // THIS WILL SET LIFE EXP TO OBJECT IN REGARDS TO ACTIVITY LEVEL 
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
  

  // THIS WILL CALCULATE LIFE LEFT FROM CURRENT AGE TO LIFE EXP(EARTH)
  calcLifeLeft() { 
    const lifeLeft = parseFloat(this.lifeExp) - parseFloat(this.age); 
    return parseFloat(lifeLeft.toFixed(2));
  }

 // THIS WILL CALCULATE LIFE LEFT FROM CURRENT AGE TO LIFE EXP(MERCURY)
  calcLifeLeftOnMercury() {
    const mercAge = this.calcMercYears(this.age);
    const mercLifeExp = this.calcMercYears(this.lifeExp);

    return parseFloat(mercLifeExp - mercAge).toFixed(2);
  }

  // THIS WILL CALCULATE LIFE LEFT FROM CURRENT AGE TO LIFE EXP(VENUS)
  calcLifeLeftOnVenus() {
    const venusAge = this.calcVenYears(this.age);
    const venusLifeExp = this.calcVenYears(this.lifeExp);

    return parseFloat(venusLifeExp - venusAge).toFixed(2);
  }
  
  // THIS WILL CALCULATE LIFE LEFT FROM CURRENT AGE TO LIFE EXP(MARS)
  calcLifeLeftOnMars() {
    const marsAge = this.calcMarsYears(this.age);
    const marsLifeExp = this.calcMarsYears(this.lifeExp);

    return parseFloat(marsLifeExp - marsAge).toFixed(2);
  }
  
  // THIS WILL CALCULATE LIFE LEFT FROM CURRENT AGE TO LIFE EXP(JUPITER)
  calcLifeLeftOnJupiter() {
    const jupiterAge = this.calcJupYears(this.age);
    const jupiterLifeExp = this.calcJupYears(this.lifeExp);

    return parseFloat(jupiterLifeExp - jupiterAge).toFixed(2);
  }
}
