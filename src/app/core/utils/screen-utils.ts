import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ScreenUtils {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }

  pushMenu() {
    const bodyElement = this.renderer.selectRootElement('body', true);
    
    if (this.isMobile()) {
      const sidebarOpenClass = bodyElement.classList.contains('sidebar-open');

      this.renderer.removeClass(bodyElement, 'sidebar-collapse');

      if (sidebarOpenClass) {
        this.renderer.removeClass(bodyElement, 'sidebar-open');
      } else {
        this.renderer.addClass(bodyElement, 'sidebar-open');
      }
    } else {
      const sidebarCollapseClass = bodyElement.classList.contains('sidebar-collapse');

      if (sidebarCollapseClass) {
        this.renderer.removeClass(bodyElement, 'sidebar-collapse');
      } else {
        this.renderer.addClass(bodyElement, 'sidebar-collapse');
      }
    } 
  }

  mobileDismissMenu() {
    if (this.isMobile()) {
      const bodyElement = this.renderer.selectRootElement('body', true);
      
      this.renderer.removeClass(bodyElement, 'sidebar-open');
    }
  }
}