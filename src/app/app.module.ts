import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PricingPageComponent } from './pricing/pricing-page/pricing-page.component';
import { PricingCardComponent } from './pricing/pricing-card/pricing-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingPageComponent,
    PricingCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
