import { Component } from '@angular/core';
import { navItems } from '@app/shared/data/navigation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  navItems = navItems;
}