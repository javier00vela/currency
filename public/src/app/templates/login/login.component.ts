import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ICiudad } from 'src/app/interfaces/ciudad.interface';
import { ISede } from 'src/app/interfaces/sede.interface';
import { UsuarioRestService } from 'src/app/services/usuario/usuario.rest.service';
import { UsuarioUtilsService } from 'src/app/services/usuario/usuario.Utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario:any = {
    identificacion : 123,
    contrasena : ''
  }; 
  public listaCiudades: Observable<ICiudad> = new Observable<ICiudad>(); 
  public listaSedes: Observable<ISede> = new Observable<ISede>(); 
  constructor(private _usuarioService: UsuarioUtilsService  ,private  _usuarioRestService: UsuarioRestService ) { }



  
  public loginForm : FormGroup = new FormGroup({
    usuario: new FormControl('usuario', [Validators.minLength(1) ,Validators.required] ),
    contrasena: new FormControl('contrasena', [Validators.required] )
  });

  public registroForm : FormGroup = new FormGroup({
    nombres: new FormControl('nombres', [Validators.minLength(1) ,Validators.required] ),
    apellidos: new FormControl('nombres', [Validators.minLength(1) ,Validators.required] ),
    usuario: new FormControl('usuario', [Validators.minLength(1) ,Validators.required] ),
    contrasena: new FormControl('contrasena', [Validators.required] )
  });

  enviarLogin(datos:FormGroup){
    if(datos.valid){
      this._usuarioService.authPerson(datos.value);
    }
  }

  enviarRegistro(datos:FormGroup){
    if(datos.valid){
      this._usuarioRestService.sendUsuarios(datos.value).subscribe(()=>{
        alert("guardado");
        datos.reset();
      });
    }
  }

  ngOnInit(): void {
    this.registroForm.reset();
    this.loginForm.reset();
  }

}