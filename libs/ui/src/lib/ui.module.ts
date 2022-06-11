import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,RouterModule],
  declarations: [TodosComponent],
  exports: [TodosComponent],
})
export class UiModule {}
