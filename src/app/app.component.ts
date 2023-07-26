import { Component } from '@angular/core';
import { SharedService } from './shared-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MailHub';
  private subscription!: Subscription;
  recargarbarra: boolean =  true;
  constructor(private sharedService: SharedService) {
    this.subscription = this.sharedService.eventoHijoAlPadre.subscribe(() => {
      this.recargarBarra();
    });
  }
  recargarBarra(): void 
  {
    this.recargarbarra = !this.recargarbarra;
  }
}
