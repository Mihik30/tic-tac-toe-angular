import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone : true,
  template: `
    <button>{{ value }}</button>
  `,
  styles: `button{background-color: transparent; border: none; font-size: 70px;}`
})
export class SquareComponent {

  @Input() value : 'X' | 'O';

}
