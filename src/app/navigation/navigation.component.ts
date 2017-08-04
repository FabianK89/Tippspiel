import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navClass = 'navigation';

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    if (this.navClass === 'navigation') {
      this.navClass += ' responsive';
    } else {
      this.navClass = 'navigation';
    }
  }
}
