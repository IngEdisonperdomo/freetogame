import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title: any = '';
  @Input() description: any = '';
  @Input() image: any = '';
  @Input() link: any = '';
}
