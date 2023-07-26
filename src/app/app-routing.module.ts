import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { BandejaEntradaComponent } from './mail/bandeja-entrada/bandeja-entrada.component';
import { CreateComponent } from './mail/create/create.component';

  
const routes: Routes = [
  { path: 'user', redirectTo: 'user/login', pathMatch: 'full'},
  { path: '', redirectTo: 'user/login', pathMatch: 'full'},
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'index', redirectTo: 'mail/bandeja-entrada', pathMatch: 'full'},
  { path: 'mail/bandeja-entrada', component: BandejaEntradaComponent },
  { path: 'mail/create', component: CreateComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
