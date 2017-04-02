import { Component } from '@angular/core';

@Component ({
  selector: 'my-third',
  styleUrls: ['app/first.css'],
  template: `
    <h1>Third {{demo}}</h1>
    <hr>
    This is the third component!
  `
})
export class ThirdComponent {
	demo ="Demo";
}
