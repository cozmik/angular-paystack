import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularPaystackComponent } from './angular-paystack.component';
import { AngularPaystackEmbedComponent } from './angular-paystack-embed.component';
import { AngularPaystackDirective } from './angular-paystack.directive';
import { AngularPaystackService } from './angular-paystack.service';
import { PUBLIC_KEY_TOKEN } from './paystack-token';

@NgModule({
  imports: [CommonModule],
  exports: [AngularPaystackComponent, AngularPaystackDirective, AngularPaystackEmbedComponent],
  declarations: [AngularPaystackComponent, AngularPaystackDirective, AngularPaystackEmbedComponent],
  providers: [],
})
export class AngularPaystackModule {
  static forRoot(token: string): ModuleWithProviders<AngularPaystackModule> {
    return {
      ngModule: AngularPaystackModule,
      providers: [
        AngularPaystackService,
        { provide: PUBLIC_KEY_TOKEN, useValue: token }
      ]
    };
  }
}
