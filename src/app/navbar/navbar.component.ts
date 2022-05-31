import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public loading(){

  }
}
