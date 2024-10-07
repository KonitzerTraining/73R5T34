import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StartModule } from './features/start/start.module';

import { LegalModule } from './features/legal/legal.module';
import { CustomerModule } from './features/customer/customer.module';
import { registerLocaleData } from '@angular/common';

import localeDe from '@angular/common/locales/de';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localeDe, 'de-DE');

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,

    // Feature Module
    StartModule,
    CustomerModule,

    // HelpModule,
    LegalModule,

    // Basic Routing
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'de-DE',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
