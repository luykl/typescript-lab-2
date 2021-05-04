import { Greeter } from "./greeter";
import { JavaScriptGreeter } from "./javascript-greeter";
import { LoudGreeter } from "./loud-greeter";
import { HTMLGreeter } from "./html-greeter";

console.log( (new Greeter("Hi")).greet("Leah") );
console.log( (new JavaScriptGreeter("Hi")).greet("Leah") );
console.log( (new LoudGreeter("Hi")).greet("Leah") );
console.log( (new HTMLGreeter("Hi", "strong")).greet("Leah") );