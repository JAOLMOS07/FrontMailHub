import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mail } from '../mail';
import { MailService } from '../mail.service';
import { UserService } from '../../user/user.service';


@Component({
  selector: 'app-bandeja-entrada',
  templateUrl: './bandeja-entrada.component.html',
  styleUrls: ['./bandeja-entrada.component.scss']
})
export class BandejaEntradaComponent implements OnInit {

  sesion!: any;
  mails: Mail[] = [];
  userId!: string;
  us: any = null;
  constructor(
    public mailService: MailService,
    public userService: UserService,

    private router: Router
  ) { }


ngOnInit(): void {
  this.sesion = JSON.parse(localStorage.getItem('sesion') || '{}');
  if(Object.entries(this.sesion).length === 0){
    this.sesion = null;
    this.router.navigateByUrl('user');

  }
  this.mailService.getAll(this.sesion.token).subscribe((data: any)=>{
    this.mails = data.data.data;
    console.log(this.mails);
  })


}


}
