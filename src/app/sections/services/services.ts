import { Component } from '@angular/core';
import { SectionLabel } from '@app/shared/components/section-label/section-label';

@Component({
  selector: 'app-services',
  imports: [SectionLabel],
  templateUrl: './services.html',
})
export class Services {
  services = [
    {
      number: '01',
      title: 'System Architecture',
      text: 'We design scalable and reliable system architectures that simplify complexity and support long-term growth.',
    },
    {
      number: '02',
      title: 'Digital Transformation',
      text: 'We modernize operations and technology to create smarter, more efficient digital experiences.',
    },
    {
      number: '03',
      title: 'Technical Consulting',
      text: 'We provide clear technical guidance to help businesses make confident technology decisions.',
    },
  ];
}
