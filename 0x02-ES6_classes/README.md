# 0x02. ES6 classes

Just like on any other higher level language, Classes in Javascript are a template for creating objects. This particular folder contains code exercises and practice on the following Javascript classes:

- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another

## Setup

### Install NodeJS 12.11.x
- curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
- sudo bash nodesource_setup.sh
- sudo apt install nodejs -y


### Install Jest, Babel, and ESLint
Add the following confirguration files to your project directory:
* package.json
* babel.config.js
* .eslintrc.js

Then run `npm install`


## Tasks

### Task 0:

Filename

	- 0-classroom.js, testfiles/0-main.js
Implement a class named ClassRoom:
- Prototype: `export default class ClassRoom`
- It should accept one attribute named maxStudentsSize (Number) and assigned to _ maxStudentsSize



### Task 1:

Filename

	- 1-make_classrooms.js, testfiles/1-main.js
Import the ClassRoom class from 0-classroom.js.
- Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).



### Task 2:

Filename

	- 2-hbtn_course.js, testfiles/2-main.js
Implement a class named HolbertonCourse:
- Constructor attributes:
name (String)
length (Number)
students (array of Strings)
- Make sure to verify the type of attributes during object creation
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _ name)
- Implement a getter and setter for each attribute.



### Task 3:

Filename

	- 3-currency.js, testfiles/3-main.js
Implement a class named Currency:

- Constructor attributes:
code (String)
name (String)
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _ name)
- Implement a getter and setter for each attribute.
- Implement a method named displayFullCurrency that will return the attributes in the following format name (code).



### Task 4:

Filename

	- 4-pricing.js, testfiles/4-main.js
Import the class Currency from 3-currency.js

Implement a class named Pricing:
- Constructor attributes:
amount (Number)
currency (Currency)
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _ name)
- Implement a getter and setter for each attribute.
- Implement a method named displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
- Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.



### Task 5:

Filename

	- 5-building.js, testfiles/5-main.js

Implement a class named Building:
- Constructor attributes:
sqft (Number)
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
- Implement a getter for each attribute.
- Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named evacuationWarningMessage.
- If a class that extends from it does not have a evacuationWarningMessage method, throw an error with the message Class extending Building must override evacuationWarningMessage



### Task 6:

Filename

	- 6-sky_high.js, testfiles/6-main.js
Import Building from 5-building.js.
- Implement a class named SkyHighBuilding that extends from Building:
- Constructor attributes:
sqft (Number) (must be assigned to the parent class Building)
floors (Number)
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
- Implement a getter for each attribute.
- Override the method named evacuationWarningMessage and return the following string Evacuate slowly the NUMBER_OF_FLOORS floors.



### Task 7:

Filename

	- 7-airport.js, testfiles/7-main.js
- Implement a class named Airport:
- Constructor attributes:
name (String)
code (String)
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
- The default string description of the class should return the airport code (example below).



### Task 8:

Filename

	- 8-hbtn_class.js, testfiles/8-main.js
- Implement a class named HolbertonClass:
- Constructor attributes:
size (Number)
location (String)
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
- When the class is cast into a Number, it should return the size.
- When the class is cast into a String, it should return the location.



### Task 9:

Filename

	- 9-hoisting.js, testfiles/9-main.js
Fix this code and make it work.

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];



### Task 10:

Filename

	- 10-car.js, testfiles/10-main.js
Implement a class named Car:
- Constructor attributes:
brand (String)
motor (String)
color (String)
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
- Add a method named cloneCar. This method should return a new object of the class.



### Task 11:

Filename:

	- 100-evcar.js, testfiles/100-main.js
- Import Car from 10-car.js.
- Implement a class named EVCar that extends the Car class:
- Constructor attributes:
brand (String)
motor (String)
color (String)
range (String)
- Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
- For privacy reasons, when cloneCar is called on a EVCar object, the object returned should be an instance of Car instead of EVCar.
