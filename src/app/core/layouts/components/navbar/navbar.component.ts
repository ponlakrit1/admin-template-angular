import { Component, OnInit } from '@angular/core';
import { ScreenUtils } from '../../../utils/screen-utils';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor(private screenUtils: ScreenUtils) {

  }

  ngOnInit(): void {

  }

  pushMenu() {
    this.screenUtils.pushMenu();
  }
}
