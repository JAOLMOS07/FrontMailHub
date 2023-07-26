import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaEntradaComponent } from './bandeja-entrada/bandeja-entrada.component';


  
const routes: Routes = [
  { path: 'mail', redirectTo: 'mail/bandeja-entrada', pathMatch: 'full'},
  { path: 'mail/bandeja-entrada', component: BandejaEntradaComponent },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
