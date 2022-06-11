import { Component, Input, OnInit } from '@angular/core';




@Component({
  selector: 'myorg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  states = ['Maharashtra','Gujrat','Punjab','Haryana','Uttar Pradesh','Tamil nadu'];
  cities = ['Mumbai','New Delhi','Chennai','Bangaluru','Hyderabad','Ahmedabad','Pune',];
  ut = ['Pondicherry','Daman and Diu','Delhi NCT','Andaman and Nicobar Island'];
  title='';
  
  all:string[] = [];


  

  constructor() {}

  ngOnInit(): void {
   
  }
getStates(){
  this.all = this.states;
  this.title='States';
  
}
getCities(){
  this.all = this.cities;
  this.title = 'Cities';
  
  
}
getUts(){
  this.all = this.ut;
  this.title = 'Union Territory';
  
}
}
