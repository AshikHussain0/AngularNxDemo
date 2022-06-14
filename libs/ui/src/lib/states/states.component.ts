import { Component, OnInit } from '@angular/core';
import { DataService } from 'apps/api/src/app/data.service';

@Component({
  selector: 'myorg-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css'],
})
export class StatesComponent implements OnInit {
  all:string[] = [];

  constructor(private dataService:DataService) {
    this.all = this.dataService.getStates();

  }

  ngOnInit(): void {}
}
