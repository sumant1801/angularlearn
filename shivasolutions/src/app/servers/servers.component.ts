import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //compnenet class selector  but should be selector
  // templateUrl: './servers.component.html',
  template: `<app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
