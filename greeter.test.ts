import { Greeter } from "./greeter";
import { JavaScriptGreeter } from "./javascript-greeter";
import { LoudGreeter } from "./loud-greeter";
import { HTMLGreeter } from "./html-greeter";

describe("Greeter", function() {

    test("greeting", () => {
        let greet:Greeter = new Greeter("Good Morning");
        let greeting:string = greet.greet("Jo");
        expect(greeting).toBe("Good Morning, Jo!");
    });

    test("another greeting", () => {
        let greeter:Greeter = new Greeter("Good Evening");
        let greeting:string = greeter.greet("Abby");
        expect(greeting).toBe("Good Evening, Abby!");
    });

    test("yet another greeting", () => {
        let greeter:Greeter = new Greeter("Hello");
        let greeting:string = greeter.greet("Brian");
        expect(greeting).toBe("Hello, Brian!");
    });
});

describe("JavaScript greeter", function() {

    test("console.log greeting", () => {
        let greeter:JavaScriptGreeter = new JavaScriptGreeter("Hey");
        let greeting:string = greeter.greet("Chris")
        expect(greeting).toBe("console.log('Hey, Chris!')");
    });

    test("another console.log greeting", () => {
        let greeter:JavaScriptGreeter = new JavaScriptGreeter("Hi there");
        let greeting:string = greeter.greet("Dave")
        expect(greeting).toBe("console.log('Hi there, Dave!')");
    });   
});


describe("loud greeter", function() {

    test("with add volume one time", () => {
        let greeter:LoudGreeter = new LoudGreeter("Hey you");
        greeter.addVolume();
        let greeting:string = greeter.greet("Nate");
        expect(greeting).toBe("Hey you, Nate!!!!");
    });

    test("with add volume 5 times", () => {
        let greeter:LoudGreeter = new LoudGreeter("Hi");
        greeter.addVolume();
        greeter.addVolume();
        greeter.addVolume();
        greeter.addVolume();
        greeter.addVolume();
        let greeting:string = greeter.greet("Clay");
        expect(greeting).toBe("Hi, Clay!!!!!!!!");
    });

    test("without add volume", () => {
        let greeter:LoudGreeter = new LoudGreeter("Nice to see you");
        let greeting:string = greeter.greet("Julie");
        expect(greeting).toBe("Nice to see you, Julie!!!");
    });       
});


describe("html greeter", function() {

    test("html greeting with tag", () => {
        let greeter:HTMLGreeter = new HTMLGreeter("How are you", "p");
        let greeting:string = greeter.greet("Gerry");
        expect(greeting).toBe("<p>How are you, Gerry!</p>");
    });

    test("html greeting with default", () => {
        let greeter:HTMLGreeter = new HTMLGreeter("Take it sleazy");
        let greeting:string = greeter.greet("Jenni");
        expect(greeting).toBe("<h1>Take it sleazy, Jenni!</h1>");
    });
});