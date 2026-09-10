import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-label',
  template: `
    <div class="flex items-center gap-3 text-[11px] font-semibold uppercase text-primary">
      <span>{{ sectionNumber() }}</span>
      <span class="h-px w-8 bg-primary"></span>
      <span>{{ label() }}</span>
    </div>
  `,
})
export class SectionLabel {
  readonly sectionNumber = input.required<string>({ alias: 'number' });
  readonly label = input.required<string>();
}
