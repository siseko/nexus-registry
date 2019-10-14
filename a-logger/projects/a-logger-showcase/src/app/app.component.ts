import { Component } from "@angular/core";
import { ALoggerService } from "projects/a-logger/src/public-api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "a-logger-showcase";

  constructor(private logger: ALoggerService) {
    this.logger.log("info", "App Started");
  }
}
