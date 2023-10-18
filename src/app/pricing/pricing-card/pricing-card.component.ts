import { Component, Input } from '@angular/core';
import { PricingTeam } from '../models/pricing-team.interface';

@Component({
  selector: 'fg-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: []
})
export class PricingCardComponent {
  @Input() public pricing!: PricingTeam;
}
