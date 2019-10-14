import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ALoggerService {
  constructor() {}

  log(logLevel: string, message: string) {
    switch (logLevel) {
      case "info":
        console.log(`%c ${message}`, "color: green");
        break;
      case "error":
        console.log(`%c ${message}`, "color: red");
        break;
      default:
        console.log(message);
        break;
    }
  }
}
