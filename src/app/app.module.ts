import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';

import { NavbarComponent } from './navbar/navbar.component';
import { NavBarFreshDirective } from './directives/nav-bar-fresh.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavBarFreshDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    MailModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
