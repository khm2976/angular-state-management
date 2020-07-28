import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContainerAComponent } from './container-A/containerA.component';
import { ContainerBComponent } from './container-B/containerB.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerAComponent,
    ContainerBComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
