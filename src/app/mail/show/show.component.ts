import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Mail } from '../mail';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  sesion!: any;
  mail!: Mail;
  constructor(private rutaActiva: ActivatedRoute,   
              public mailService: MailService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.sesion = JSON.parse(localStorage.getItem('sesion') || '{}');
    if(Object.entries(this.sesion).length === 0){
    this.sesion = null;
    this.router.navigateByUrl('user');

  }
    this.mailService.getMail(this.sesion.token,this.rutaActiva.snapshot.params['mail']).subscribe((data: any)=>{
      this.mail = data.data;
      console.log(this.mail);
    })
  }
}
