import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs: ['pdata']
})
export class ChildComponent implements OnInit {
  pdata:any;
  constructor() { }
  ngOnInit(): void {
  }

}
