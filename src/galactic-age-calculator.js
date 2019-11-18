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

  // THIS WILL CALCULATE LIFE LEFT FROM CURRENT AGE TO LIFE EXP(EARTH)
  calcLifeLeft() { 
    const lifeLeft = parseFloat(this.lifeExp) - parseFloat(this.age); 
    return parseFloat(lifeLeft.toFixed(2));
  }

  // THIS WILL CALCULATE LIFE LEFT FROM CURRENT AGE TO LIFE EXP(MERCURY)
  calcLifeLeftOnMercury() {
    const mercAge = this.calcMercYears(this.age);
    const mercLifeExp = this.calcMercYears(this.lifeExp);
    const difference = Math.abs(mercAge - mercLifeExp)

    return parseFloat(difference).toFixed(2);
  }

  // THIS WILL CALCULATE LIFE LEFT FROM CURRENT AGE TO LIFE EXP(VENUS) 
  // & WILL RETURN YEARS LIVED PASSED LIFE EXP IG AGE > LIFE EXP.
  calcLifeLeftOnVenus() {
    const venusAge = this.calcVenYears(this.age);
    const venusLifeExp = this.calcVenYears(this.lifeExp);
    const difference = Math.abs(venusAge - venusLifeExp);

    return parseFloat(difference).toFixed(2);
  }
  
  // THIS WILL CALCULATE LIFE LEFT FROM CURRENT AGE TO LIFE EXP(MARS)
  // & WILL RETURN YEARS LIVED PASSED LIFE EXP IG AGE > LIFE EXP.
  calcLifeLeftOnMars() {
    const marsAge = this.calcMarsYears(this.age);
    const marsLifeExp = this.calcMarsYears(this.lifeExp);
    const difference = Math.abs(marsAge - marsLifeExp);

    return parseFloat(difference).toFixed(2);

  }
  
  // THIS WILL CALCULATE LIFE LEFT FROM CURRENT AGE TO LIFE EXP(JUPITER)
  // & WILL RETURN YEARS LIVED PASSED LIFE EXP IG AGE > LIFE EXP.
  calcLifeLeftOnJupiter() {
    const jupiterAge = this.calcJupYears(this.age);
    const jupiterLifeExp = this.calcJupYears(this.lifeExp);
    
    const difference = Math.abs(jupiterAge - jupiterLifeExp)


    return parseFloat(difference).toFixed(2);
  }

}
