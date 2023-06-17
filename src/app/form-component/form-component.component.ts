import { Component  } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  firstName: string = '';

  log(value: string) {
    console.log(value);
  }
}
