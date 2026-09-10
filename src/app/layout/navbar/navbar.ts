import { Component } from '@angular/core';
import { navItems } from '@app/shared/data/navigation';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly menuIcon = Menu;
  readonly closeIcon = X;

  navItems = navItems;

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}