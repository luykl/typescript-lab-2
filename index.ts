import { Greeter } from "./greeter";
import { JavaScriptGreeter } from "./javascript-greeter";
import { LoudGreeter } from "./loud-greeter";
import { HTMLGreeter } from "./html-greeter";

// console.log( (new Greeter("Hi")).greet("Leah") );
// console.log( (new JavaScriptGreeter("Hi")).greet("Leah") );
// console.log( (new LoudGreeter("Hi")).greet("Leah") );
// console.log( (new HTMLGreeter("Hi", "strong")).greet("Leah") );

const chalk = require("chalk");

let yourName = require('prompt-sync')()(chalk.inverse('who do you think you are??? '));
console.log( chalk.magentaBright( (new Greeter("Hi")).greet(yourName) ) );
console.log( chalk.blueBright( (new JavaScriptGreeter("Hi")).greet(yourName) ) );
console.log( chalk.cyanBright( (new LoudGreeter("Hi")).greet(yourName) ) );
console.log( chalk.green( (new HTMLGreeter("Hi", "strong")).greet(yourName) ) );


