import { Component } from '@angular/core';
import { ArrowUpRight, LucideAngularModule } from 'lucide-angular';
import { SectionLabel } from '@app/shared/components/section-label/section-label';

@Component({
  selector: 'app-contact',
  imports: [SectionLabel, LucideAngularModule],
  templateUrl: './contact.html',
})
export class Contact {
  readonly arrowUpRight = ArrowUpRight;
}