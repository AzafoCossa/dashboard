import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  sidebarOpen: Boolean = true;

  constructor() {}

  ngOnInit(): void {}

  public sideBarToggler() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
