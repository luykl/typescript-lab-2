import { Greeter } from "./greeter";

export class LoudGreeter extends Greeter {
    private extra:string = "!!";
    greet(name:string) {
        return (super.greet(name)).toUpperCase() + this.extra;
    }
    addVolume():void {
        this.extra = this.extra + "!";

    }

}