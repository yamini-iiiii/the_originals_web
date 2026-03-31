import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mobileOpen = false;
  servicesOpen = false;

  constructor(private viewportScroller: ViewportScroller){}

  toggleMobileMenu(): void {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobileMenu(): void {
    this.mobileOpen = false;
    this.servicesOpen = false;
  }

  toggleServices(): void {     // NEW
    this.servicesOpen = !this.servicesOpen;
  }

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
