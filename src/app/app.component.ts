import { Component, VERSION } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  appName = 'This is a One-way Data binding example..';
  clientName: string = 'Enter your name here';

  appliedCSSClass = 'Red';
  notappliedCSSClass = false;
  myColor = 'Violet';

  //Event binding

  message = '';

  onButtonClick() {
    this.message = 'Congratulation You have won!';
  }

  //Event as an alert()
  showAlert() {
    alert('Yehey!!');
  }

  // for two-way data binding demo
  myName = '';

  //ngIf Demo
  showElement = false;

  //ngFor Demo

  //ngSwitch
  selectedOption = 3;

  //ngStyle
  color = 'green';

  //ngClass
  isBold = true;
  isItalic = true;

  //ngModel
  name = '';
}
