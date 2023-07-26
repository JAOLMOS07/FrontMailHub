import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  sesion!: any;
  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sesion = JSON.parse(localStorage.getItem('sesion') || '{}');
    if(Object.entries(this.sesion).length === 0){
      this.sesion = null;
    }else{
      this.router.navigateByUrl('index');
    }

    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required])
    });

  }

  get f(){
    return this.form.controls;
  } 


  submit(){
    this.userService.register(this.form.value).subscribe(res => {
          console.log('User created successfully!');
          this.router.navigateByUrl('user');
    })
  }

}
