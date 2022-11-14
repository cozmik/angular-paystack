import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularPaystackModule} from 'angular-paystack';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularPaystackModule.forRoot('pk_test_e1d262d66ce29c137e2bff2bc5f70019df03ddc1')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
