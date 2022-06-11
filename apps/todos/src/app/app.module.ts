import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {UiModule} from '@myorg/ui';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';



@NgModule({
  declarations: [AppComponent,NxWelcomeComponent],
  imports: [BrowserModule,HttpClientModule,UiModule,RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
