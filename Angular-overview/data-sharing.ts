//using viewchild:
//on-parent-component:
<hello></hello>

<button (click)="getDum()">Get Details from child</button>

<p>Data using viewchild:{{dummyData}}</p>


ts:
@ViewChild(HelloComponent) helloComponent !: HelloComponent;

dummyData = " ";

getDum(){
  this.dummyData = this.helloComponent.dummy;
}


//child component:

dummy= "Im dummy data";

  getdata(){
    return this.dummy;
  }








//using @Input()
//child
import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<p>Im from parent message caled {{ message }}</p>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
 @Input() message: string;
}


//parent:
import { style } from '@angular/animations';
import { Component, Directive, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  template: `<hello message={{name}}></hello>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  name = "Arasu";
 
}



//using output:
//child
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<button (click)="sender()">Send to parent</button>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
@Output() sendToparent : EventEmitter <string> = new EventEmitter();


sender(){
  this.sendToparent.emit("Im from child component data");
}
}


//parent
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <hello (sendToparent)="receiveMessage($event)"></hello>
    <p>Message from child: {{ message }}</p>
  `
})
export class ParentComponent {
  message: string = '';

  // This method receives the data emitted by child
  receiveMessage(msg: string) {
    this.message = msg;
  }
}




//sharing service without using dependency injection  :  ans using new class
// because class having instances so the value is refered to this. keyword
1. Manually create an instance using new

You can directly import the service class and instantiate it.

Example:
// my.service.ts
export class MyService {
  sayHello() {
    return 'Hello from MyService!';
  }
}

// app.component.ts
import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  template: `<p>{{ message }}</p>`
})
export class AppComponent {
  message: string;

  // ⚠️ Manually creating the service
  myService = new MyService();

  constructor() {
    this.message = this.myService.sayHello();
  }
}