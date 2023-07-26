import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { SharedService } from '../../shared-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  form!: FormGroup;
  sesion!: any;
  error: boolean= false;
  mensajeError!: string;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(
    public userService: UserService,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sesion = JSON.parse(localStorage.getItem('sesion') || '{}');
    if(Object.entries(this.sesion).length === 0){
      this.sesion = null;
    }else{
      this.router.navigateByUrl('index');
    }

    this.form = new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required])
    });

  }
  get f(){
    return this.form.controls;
  } 


  submit() {
    this.userService.login(this.form.value).subscribe(
      (data: User) => {
        // El inicio de sesión fue exitoso, maneja la respuesta aquí
        this.sesion = data;
        localStorage.setItem('sesion', JSON.stringify(this.sesion));
        console.log("Bienvenido", this.sesion.user.name);
        this.sharedService.eventoHijoAlPadre.emit();
        this.router.navigateByUrl('index');
      },
      (error) => {
        // Maneja el error de inicio de sesión aquí
        console.error("Error en el inicio de sesión:", status);
        this.error = true;
        this.mensajeError = "Verifica tus datos e intenta nuevamente.";

      }
    );
  }


}
