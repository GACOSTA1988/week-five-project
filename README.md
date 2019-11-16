# Galactic Age Calculator

#### This application allows you to enter your age and will return your age based on a different planets solar years, 11-8-19 current version.

#### By George Acosta

## Specifications

1. Takes a persons age and returns it in Mercury years. 
2. Takes a persons age and returns it in Venus years. 
3. Takes a persons age and returns it in Mars years. 
4. Takes a persons age and returns it in Jupiter years. 
5. Determines how many years a user has left to live on each planet according to their lfe expectancy.
6. Determines how many years a user has live passed their life expectancy.

## TDD SPECS
1. Test should correctly convert 5 earth years to (20.83) mercury year.

* FAIL
* EX INPUT: 5
* EX OUTPUT: 30

* PASS
* EX INPUT: 5
* EX OUTPUT: 20.83

2. Test should correctly convert 5 earth years to (8.13) Venus year.
* FAIL
* EX INPUT: 5
* EX OUTPUT: 6

* PASS
* EX INPUT: 5
* EX OUTPUT: 8.06
3. Test should correctly convert 5 earth years to (2.66) Mars year.
* FAIL
* EX INPUT: 5
* EX OUTPUT: 6

* PASS
* EX INPUT: 5 
* EX OUTPUT: 2.66
4. Test should correctly convert 5 earth years to (.42) Jupiter year.
* FAIL
* EX INPUT: 5
* EX OUTPUT: 2

* PASS
* EX INPUT: 5
* EX OUTPUT: .42

6. Test should correctly set the activity level for person object.
* FAIL
* EX INPUT: Not Active
* EX OUTPUT: Very Active

* PASS
* EX INPUT: Very Active
* EX OUTPUT: Very Active

7. Test should correctly set a persons life expactancy. 
* FAIL
* EX INPUT: Very Active
* EX OUTPUT: 50

* PASS
* EX INPUT: Very Active 
* EX OUTPUT: 80

8. should correctly calculate life left in regards to   current age and lifeExp 
* FAIL
* EX INPUT: This.age 20, LifeExp 50
* EX OUTPUT: 40

* PASS
* EX INPUT: This.age 20, LifeExp 80
* EX OUTPUT: 60

9. should correctly calculate life left in regards to current age and lifeExp on Mercury
* FAIL
* EX INPUT:  
* EX OUTPUT: 

* PASS
* EX INPUT: 
* EX OUTPUT: 

## Setup/Installation Requirements

* Clone portfolio this repository
* Open simple HTTP server in the clone directory
* Open with browser of choice


## Technologies Used

1. css
2. bootstrap
3. Jquery
4. node.js
5. webpack
6. webpack-dev-server & webpack-cli
8. uglifyjs-webpack-plugin
9. eslint 
7. jest
10. popper.js
11. style-loader
12. html-webpack-plugin
13. clean-webpack-plugin
14. babel


### License

Copyright (c) 2016 **_George Acosta_**
