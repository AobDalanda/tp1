import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exo1Component } from './exo1/exo1.component';
import { Exo3Component } from './exo3/exo3.component';
import {FormsModule} from "@angular/forms";
import { TestServiceComponent } from './test-service/test-service.component';

@NgModule({
  declarations: [
    AppComponent,
    Exo1Component,
    Exo3Component,
    TestServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
