import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContainerAComponent } from './container-A/containerA.component';
import { ContainerBComponent } from './container-B/containerB.component';
import { StoreService } from './shared/store.service';
import { SelectorService } from './shared/selector.service';
import { RequestDataService } from './shared/request-data.service';

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
  providers: [StoreService, SelectorService, RequestDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
