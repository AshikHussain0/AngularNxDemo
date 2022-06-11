
import { Component, Input } from '@angular/core';
import { Todo } from '@myorg/data';




@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() todos: Todo[] = [];
  constructor(){
  
  }
 
}