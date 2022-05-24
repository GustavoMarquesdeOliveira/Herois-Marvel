import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonagensComponent } from './personagens/personagens.component';

import { HttpClientModule } from "@angular/common/http";
import { PersonagensService } from './service/personagens.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonagensComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [PersonagensService],
  bootstrap: [AppComponent]
})
export class AppModule { }
