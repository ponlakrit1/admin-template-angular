import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private renderer: Renderer2) {

  }

  pushMenu() {
    const bodyElement = this.renderer.selectRootElement('body', true);
    const hasClass = bodyElement.classList.contains('sidebar-collapse');
    
    if (hasClass) {
      this.renderer.removeClass(bodyElement, 'sidebar-collapse');
    } else {
      this.renderer.addClass(bodyElement, 'sidebar-collapse');
    }
  }
}
