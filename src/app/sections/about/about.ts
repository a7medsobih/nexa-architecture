import { Component } from '@angular/core';
import { SectionLabel } from '@app/shared/components/section-label/section-label';

@Component({
  selector: 'app-about',
  imports: [SectionLabel],
  templateUrl: './about.html',
})
export class About {
  principles = [
    {
      number: '01',
      title: 'Structure First',
      text: 'We create clear structures that turn complex systems into manageable and scalable solutions.',
    },
    {
      number: '02',
      title: 'Technology with Purpose',
      text: 'Every technology decision is aligned with business goals, operational needs, and long-term growth.',
    },
    {
      number: '03',
      title: 'Clarity by Design',
      text: 'We simplify complexity through thoughtful architecture, clear processes, and intentional digital solutions.',
    },
  ];
}