import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-fake-login',
  templateUrl: './fake-login.component.html',
  styleUrls: ['./fake-login.component.css']
})
export class FakeLoginComponent implements OnInit {

  usuarios: Usuario[] = [
    { "id": 1, nombre: "Lucas", apellido: "Diaz", dni: "11.222.999" },
    { "id": 2, nombre: "Marcelo", apellido: "Perez", dni: "11.222.666" },
    { "id": 3, nombre: "Jose", apellido: "Lopez", dni: "11.222.333" },

  ]
  fakelog: FormGroup = new FormGroup({});

  usuarioEncontrado: Usuario | undefined;

  validUser = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.fakelog = this.newFakelogForm();
  }

  onLogin(data: any): void {

    /* buscar al asegurado en el arrary de asegurados (fake data)
    ** por nombre y apellido, en la implementacion real esta accion
    ** la realiza el back end 
    */

    this.usuarioEncontrado = this.usuarios.find(
      u => {
        if (u.nombre === data.nombre && u.apellido === data.apellido) {
          return true;
        } else {
          return false;
        }
      });

    if (this.usuarioEncontrado != undefined) {

      this.validUser = true;
      let userId: number = this.usuarioEncontrado.id;
      this.router.navigate(['asegurado', userId]);

    } else {

      this.resetFakelog();
    }

  }

  private resetFakelog(): void {

    this.fakelog.reset({
      nombre: ' ',
      apellido: ' '
    });
    this.fakelog.updateValueAndValidity();
  }

  private newFakelogForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]]
    });
  }

}


