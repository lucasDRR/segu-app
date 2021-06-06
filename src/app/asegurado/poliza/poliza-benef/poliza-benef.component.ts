import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poliza-benef',
  templateUrl: './poliza-benef.component.html',
  styleUrls: ['./poliza-benef.component.css']
})
export class PolizaBenefComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'dni', 'domicilio', 'del'];

  datos: any = [
    {"nombre": "Lucia", "apellido": "Diaz", "dni" : "11.111.111", "domicilio": "JBJ 7177"},
    {"nombre": "Marcelo", "apellido": "Diaz", "dni" : "11.222.222", "domicilio": "JBJ 7177"},
    {"nombre": "Joaquin", "apellido": "Diaz", "dni" : "11.333.333", "domicilio": "JBJ 7177"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
