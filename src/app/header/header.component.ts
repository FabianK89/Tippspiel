import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Bundesliga-Tippspiel';
  myVar = './assets/images/logo.png' ;

  constructor() { }

  ngOnInit() {
  }

}
