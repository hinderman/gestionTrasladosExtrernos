import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InformationHeadComponent } from './information-head/information-head.component';
import { InformationMiddleComponent } from './information-middle/information-middle.component';
import { InformationTableComponent } from './information-table/information-table.component';
import { InformationFooterComponent } from './information-footer/information-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationHeadComponent,
    InformationMiddleComponent,
    InformationTableComponent,
    InformationFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
