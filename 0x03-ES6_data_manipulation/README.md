# 0x03-ES6_data_manipulation

## Introduction

ES6, also known as ECMAScript 2015, introduced several features that facilitate data manipulation in JavaScript. Apart from the existings arrays, ES6 introduced new data structures like set, map and weakset. 

- Arrays are collections of elements that can be stored and accessed using indices. In ES6, arrays have been enhanced with several features such as arrow functions for array methods, the spread syntax and destructuring assignment.
- Sets are a collection of unique elements meaning that each element appears only once in a set. Set automatically removes duplicate elements making them ideal for storing uniquevalues. Also comes with a number of set methods such as add(), delete(), has(), and clear() just to mention a few.
- Maps are a collection of key-value pairs where each key can be of any data type such as objects, functions, and primitive values.A key in the Map may only occur once; it is unique in the Map's collection. Also comes with a number of methods to manipulate the data in maps
- Weakmaps is similar to maps but with some differences. Weakmaps hold weak references to the object they contain meaning that they do not prevent garbage collection of those objects in case they are not used elsewhere in the program.


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
