# NgEventsDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

This project shows how to use some events. Some of them fires alerts messages and others on the console.

Implemented events:
Copy/Paste/Cut
Focus/Blur
Click/Double Click

Some of other interesting events

Click	(click)=”clickFunction()”	            When we need to do some action on element click on that time bind these event on that element.

Double Click	(dblclick)=”dbclickFunction()”	When we need to do some action on double click on element at that time bind these 
event.

Blur	(blur)=”blurFunction()”	                The blur event fires when an element has lost focus. Mainly used in Form elements.

Focus	(focus)=”focusFunction()”	            The focus event fires when an element has received focus.Mainly used in Form elements.

Submit	(submit)=”submitFunction()”	            When we want to submit form we trigger “submit” event.

Scroll	(scroll)=”scrollFunction()”	            When we Scroll the page it fires these event.

Keyup	(keyup)=”keyupFunction()”	            The keyup event is fired when a key is released from the keyboard.

Keypress	(keypress)=”keypressFunction()”	    The keypress event is fired when a key that produces a character value is pressed down.

Keydown	(keydown)=”keydownFunction()”	        The keydown event is fired when a key is pressed.

Mouse Up	(mouseup)=”mouseupFunction()”	    The mouseup event is fired at an Element when a button on a pointing device (such as a mouse) is released while the pointer is located inside it.

Mouse Down	(mousedown)=”mousedownFunction()”	The mousedown event is fired at an Element when a pointing device button is pressed while the pointer is inside the element.

Mouse Enter	(mouseenter)=”mouseenterFunction()”	The mouseenter event is fired at an Element when a pointing device (usually a mouse) is initially moved so that its hotspot is within the element at which the event was fired.

Cut	(cut)=”cutFunction()”	                    The cut event is fired when the user has initiated a “cut” action through the browser’s user interface.

copy	(copy)=”copyFunction()”	                The copy event fires when the user initiates a copy action through the browser’s user interface.

Paste	(paste)=”pasteFunction()”	            The paste event is fired when the user has initiated a “paste” action through the browser’s 
user interface.

Drag	(drag)=”dragFunction()”	                The DragEvent interface is a DOM event that represents a drag and drop interaction. The user 
initiates a drag by placing a pointer device.

Drop	(drop)=”dropFunction()”	                Drop event fire when we leave the pointing device.

Dragover	(dragover)=”dragoverFunction()”	    The dragover event is fired when an element or text selection is being dragged over a valid drop target.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
