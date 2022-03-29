import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  @Output() paginado = new EventEmitter<boolean>()

  formLogin: FormGroup = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }
  mensaje = "";
  ngOnInit(): void {
  }


  iniciarSesion() {
    if (this.formLogin.invalid) {
      this.mensaje = "Favor de llenar todos los campos correctamente"
      return;
    }

    if (environment.user == this.formLogin.controls['user'].value && environment.password == this.formLogin.controls['password'].value) {
      this.paginado.emit(true)
    } else {
      this.mensaje = "¡Usuario o contraseña incorrecta!"
    }
  }
}
