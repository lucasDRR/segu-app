import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aseg-pol',
  templateUrl: './aseg-pol.component.html',
  styleUrls: ['./aseg-pol.component.css']
})
export class AsegPolComponent implements OnInit {

  displayedColumns: string[] = ['position', 'cover', 'sumaaseg', 'detail', 'del'];

  datos: any = [
    {"id": "01", "cover": "vida", "sumaaseg": "$ 400.000"},
    {"id": "02", "cover": "retiro", "sumaaseg": "$ 1.000.000"},
    {"id": "03", "cover": "accidentes", "sumaaseg": "$ 500.000"},
    {"id": "04", "cover": "vida plus", "sumaaseg": "$ 300.000"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  deletePoliza(id: any){
    console.log("eliminado "+id);
  }

  updatePoliza(data: any){
    console.log("modificar "+data.id);
  }

}
