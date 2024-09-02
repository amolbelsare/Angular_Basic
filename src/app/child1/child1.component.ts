import { Component, EventEmitter, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  outputs: ['childEvent']
})
export class Child1Component implements OnInit {
  childEvent = new EventEmitter();
  constructor() { }

  onChange(value:string){
    this.childEvent.emit(value);
  }
  ngOnInit(): void {
  }

}
