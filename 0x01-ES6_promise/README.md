# 0x01. ES6 Promises

Promises are a fundamental concept in JavaScript for handling asynchronous operations. They provide a way to work with asynchronous code in a more readable and manageable manner.
At its core, a Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This enables writing asynchronous code that looks and behaves more like synchronous code, making it easier to understand and maintain.

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
