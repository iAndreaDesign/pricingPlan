import { Component } from '@angular/core';
import { PricingTeam } from '../models/pricing-team.interface';

@Component({
  selector: 'fg-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: []
})
export class PricingPageComponent {
  public pricingTeam: PricingTeam[] = [
    { 
      id:         '1',
      title:      'Freelancer',
      subtitle:   'The essentials to provide your best work for clients.',
      price:      '$24',
      date:       '/month',
      features:   ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time']
    },
    { 
      id:         '2',
      title:      'Start Up',
      subtitle:   'A plan that scales with your rapidly growing business.',
      tag:        'Popular',
      price:      '$32',
      date:       '/month',
      features:   ['5 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time', 'Marketing automations']
    },
    { 
      id:         '3',
      title:      'Enterprice',
      subtitle:   'Dedicated support and infrastructure for your company.',
      price:      '$48',
      date:       '/month',
      features:   ['Unlimited products', 'Unlimited subscribers', 'Advanced analytics', '1-hour, dedicated support response time', 'Marketing automations']
    },
  ]

}
