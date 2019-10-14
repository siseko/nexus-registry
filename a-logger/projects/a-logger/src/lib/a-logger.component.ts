import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-a-logger',
  template: `
    <p>
      a-logger works!
    </p>
  `,
  styles: []
})
export class ALoggerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
