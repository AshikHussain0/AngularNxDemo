import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { RouterModule } from '@angular/router';
import { StatesComponent } from './states/states.component';
import { CitiesComponent } from './cities/cities.component';
import { UnionTerritoriesComponent } from './union-territories/union-territories.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    TodosComponent,
    StatesComponent,
    CitiesComponent,
    UnionTerritoriesComponent,
  ],
  exports: [
    TodosComponent,
    StatesComponent,
    CitiesComponent,
    UnionTerritoriesComponent,
  ],
})
export class UiModule {}
