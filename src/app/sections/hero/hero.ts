import { Component } from '@angular/core';
import { ArrowDown, ArrowUpRight, LucideAngularModule } from 'lucide-angular';

import { SectionLabel } from '@app/shared/components/section-label/section-label';

@Component({
  selector: 'app-hero',
  imports: [SectionLabel, LucideAngularModule],
  templateUrl: './hero.html',
})
export class Hero {
  readonly arrowUpRight = ArrowUpRight;
  readonly arrowDown = ArrowDown;
  gridItems = Array(12);
}