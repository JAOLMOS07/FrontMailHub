import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  sesion!: any;
  constructor(
    public mailService: MailService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.sesion = JSON.parse(localStorage.getItem('sesion') || '{}');
    if(Object.entries(this.sesion).length === 0){
      this.sesion = null;
      this.router.navigateByUrl('index');
    }

    this.form = new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.email ]),
      asunto:  new FormControl('', [ Validators.required]),
      contenido: new FormControl('', [ Validators.required]),
      importante: new FormControl('')

    });

  }
  
  get f(){
    return this.form.controls;
  } 
  submit(){
    this.mailService.create(this.sesion.token,this.form.value).subscribe(res => {
          console.log('Mail enviado');
          this.router.navigateByUrl('index');
    },(error) => {
      // Maneja el error de inicio de sesión aquí
      console.error("Error en el inicio de sesión:", error);

    }
  );
  }
}
