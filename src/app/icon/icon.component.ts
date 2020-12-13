import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <svg class='app-icon' aria-hidden='true' focusable='false'>
      <use attr.xlink:href='assets/icons.svg#{{iconType}}'></use>
    </svg>
  `,
  styleUrls: [ './icon.component.sass' ]
})
export class IconComponent {
  @Input('type') iconType!: string;
}
