import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-events-demo';
  name = 'Angular ' + VERSION.major;

  clickEvent() {
    alert('Simple click event fired');
  }

  dblclickEvent() {
    alert('Double click event fired');
  }

  blurEvent() {
    console.log('Blur event fired');
    // alert('Blur event fired');   
  }

  focusEvent() {
    console.log('Focus event fired');
    //alert('Focus event fired');   
  }

  copyEvent() {
    alert('Copy event fired');
  }

  cutEvent() {
    alert('Cut event fired');

  }

  pasteEvent() {
    alert('Paste event fired');
  }
}
