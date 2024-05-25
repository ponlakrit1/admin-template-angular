import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  sub: SubRouteInfo[];
}

declare interface SubRouteInfo {
  path: string;
  title: string;
  icon: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/chart', title: 'แผนภูมิ',  icon: 'chart-line', sub: [] },
  { path: '/form-field', title: 'แบบฟอร์ม',  icon:'file', sub: [] },
  { path: '/sub-menu', title: 'ตัวอย่างเมนูย่อย',  icon:'chevron-down', sub: [
    {path: '/sub-menu/sub1', title: 'เมนูย่อย 1',  icon:'circle'},
  ] },
];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];

  constructor(private router: Router) {
    this.menuItems = [];
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isSubMenuActive(items: SubRouteInfo[]) {
    const currentPath = this.router.url;

    let isMatch = false;

    for (let item of items) {
      if (item.path == currentPath) {
        isMatch = true;
        break;
      }
    }

    return isMatch;
  }

}
