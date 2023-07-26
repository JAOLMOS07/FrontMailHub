import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
sesion!: any;
constructor(
  public userService: UserService,
  private router: Router,
) { }
ngOnInit(): void {
  this.sesion = JSON.parse(localStorage.getItem('sesion') || '{}');
  if(Object.entries(this.sesion).length === 0){
    this.sesion = null;
  }
}

cerrarSesion(): void {
  var token = {token: this.sesion.token };
  this.userService.logout(token).subscribe(res => {
    
})

console.log('Sesión terminada');
    this.sesion = null;
    localStorage.clear();
    this.router.navigateByUrl('user');

}

}

