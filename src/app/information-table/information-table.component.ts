import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-table',
  templateUrl: './information-table.component.html',
  styleUrls: ['./information-table.component.css']
})
export class InformationTableComponent implements OnInit {
  dataSourceColumnas: string[] = ['Consecutivo', 'Capital', 'Rendimientos', 'Cuenta contingente', ' ']

  constructor() { }

  ngOnInit(): void {
  }

}
