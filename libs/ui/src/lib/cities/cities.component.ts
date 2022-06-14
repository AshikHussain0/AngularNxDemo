import { Component, OnInit } from '@angular/core';
import { DataService } from 'apps/api/src/app/data.service';

@Component({
  selector: 'myorg-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {
  all:string[] = [];
  constructor(private dataservice:DataService) {
    this.all = this.dataservice.getCities();
  }

  ngOnInit(): void {}
}
