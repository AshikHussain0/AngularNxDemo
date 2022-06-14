import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {TodosComponent, UiModule} from '@myorg/ui';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CitiesComponent } from 'libs/ui/src/lib/cities/cities.component';
import { StatesComponent } from 'libs/ui/src/lib/states/states.component';
import { UnionTerritoriesComponent } from 'libs/ui/src/lib/union-territories/union-territories.component';
import { DataService } from 'apps/api/src/app/data.service';





@NgModule({
  declarations: [AppComponent,NxWelcomeComponent],
  imports: [BrowserModule,HttpClientModule,UiModule,RouterModule.forRoot([
    {path:'libs/ui/src/lib/cities/cities.component',component:CitiesComponent},
    {path:'libs/ui/src/lib/states/states.component',component:StatesComponent},
    {path:'libs/ui/src/lib/union-territories/union-territories.component',component:UnionTerritoriesComponent},
    {path:'libs/ui/src/lib/todos/todos.component',component:TodosComponent},
    {path:'',redirectTo:'libs/ui/src/lib/todos/todos.component', pathMatch:'full'}
    ])],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
