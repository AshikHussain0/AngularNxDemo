import { Component, OnInit } from '@angular/core';
import { DataService } from 'apps/api/src/app/data.service';

@Component({
  selector: 'myorg-union-territories',
  templateUrl: './union-territories.component.html',
  styleUrls: ['./union-territories.component.css'],
})
export class UnionTerritoriesComponent implements OnInit {
  all:string[] = [];
  constructor(private dataservice:DataService) {
    this.all = this.dataservice.getUts();
  }

  ngOnInit(): void {}
}
