import { Component } from "@angular/core";
import { ALoggerService } from "a-logger";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "big-app";
  constructor(private logger: ALoggerService) {
    this.logger.log("info", "App Has been started");
  }
}
