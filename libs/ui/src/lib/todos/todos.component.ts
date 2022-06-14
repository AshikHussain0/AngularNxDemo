import { Component, OnInit } from '@angular/core';
import {DataService} from 'apps/api/src/app/data.service';




@Component({
  selector: 'myorg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {

all:string[] = [];

  

  constructor(private dataservice:DataService) {
    this.all = this.dataservice.getSac();
     
    
  }

  ngOnInit(): void {
   
  }

}
